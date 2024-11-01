document.addEventListener("alpine:init", () => {
  // Helper function to explode comma-separated values
  function explodeField(data, field) {
    return data.flatMap((d) => {
      if (!d[field] || d[field] === "N/A")
        return [{ ...d, [field]: "Not Specified" }];
      return d[field]
        .split(",")
        .map((value) => value.trim())
        .map((value) => ({ ...d, [field]: value }));
    });
  }

  function wrapText(text, maxLength) {
    // Break up individual words if they're longer than maxLength
    const words = text.split(" ").map((word) =>
      word.length > maxLength
        ? word
            .match(new RegExp(`.{1,${maxLength}}`, "g"))
            .map((part, i, arr) => (i < arr.length - 1 ? part + "-" : part))
            .join("\n")
        : word
    );
    // Then combine words while respecting maxLength
    let lines = [];
    let currentLine = "";
    words.forEach((word) => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);
    return lines.join("\n");
  }

  function addTooltipsToAxisLabels(chartId, data, characteristic) {
    if (!characteristic.includes("(short)")) return;

    const tooltip = d3.select("#program-explorer-custom-tooltip");

    // store all unique values for this characteristic
    const valueMap = new Map(
      data.map((d) => [
        wrapText(d[characteristic], 12).replace(/\n/g, ""), // wrapped text get rid of line breaks
        d[characteristic], // original value
      ])
    );

    d3.selectAll(`#${chartId} svg [aria-label="x-axis tick label"] text`).each(
      function () {
        const wrappedText = d3.select(this).text(); // this value is wrapped text without line breaks
        const shortName = valueMap.get(wrappedText); // Get original value
        const fullName = data.find((p) => p[characteristic] === shortName)?.[
          characteristic.replace(" (short)", "")
        ];

        d3.select(this)
          .style("cursor", "help")
          .on("mouseover", (event) => {
            tooltip
              .style("visibility", "visible")
              .text(fullName)
              .style("left", `${event.pageX + 20}px`)
              .style("top", `${event.pageY + 10}px`);
          })
          .on("mousemove", (event) => {
            tooltip
              .style("left", `${event.pageX + 20}px`)
              .style("top", `${event.pageY + 10}px`);
          })
          .on("mouseout", () => {
            tooltip.style("visibility", "hidden");
          });
      }
    );
  }

  function addTooltipsToLegends(chartId, data, characteristic) {
    if (!characteristic.includes("(short)")) return;

    const tooltip = d3.select("#program-explorer-custom-tooltip");

    const valueMap = new Map(
      data.map((d) => [
        d[characteristic], // short value
        d[characteristic.replace(" (short)", "")], // full value
      ])
    );

    d3.selectAll(`#${chartId} .legend-item-swatch`).each(function () {
      const swatch = d3.select(this);
      // Get text content directly from the span, excluding SVG content
      const shortName = this.textContent.trim();
      const fullName = valueMap.get(shortName);

      swatch
        .style("cursor", "help")
        .on("mouseover", (event) => {
          tooltip
            .style("visibility", "visible")
            .text(fullName)
            .style("left", `${event.pageX + 20}px`)
            .style("top", `${event.pageY + 10}px`);
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", `${event.pageX + 20}px`)
            .style("top", `${event.pageY + 10}px`);
        })
        .on("mouseout", () => {
          tooltip.style("visibility", "hidden");
        });
    });
  }

  function calculateTotalFunding(data) {
    return data.reduce((sum, v) => sum + (+v["Funding Level"] || 0), 0);
  }
  function calculateAverageFunding(data) {
    return calculateTotalFunding(data) / data.length;
  }
  function formatFundingInBillions(amount) {
    return `$${(amount / 1e9).toFixed(1)}B`;
  }

  function addTooltipsToBars(
    chartId,
    chartData,
    selectedMeasure,
    selectedCharacteristic1,
    selectedCharacteristic2
  ) {
    const tooltip = d3.select("#program-explorer-custom-tooltip");
    const sameOption = selectedCharacteristic1 === selectedCharacteristic2;

    d3.selectAll(`#${chartId} svg g[aria-label="bar"] rect`).each(function () {
      const bar = d3.select(this);
      const ariaLabel = bar.attr("aria-label");

      // Parse the values from aria-label
      const [char1Value, char2Value] = sameOption
        ? [ariaLabel, ariaLabel]
        : ariaLabel.split(" | ");

      // Filter data based on both characteristics
      const filteredData = sameOption
        ? chartData.filter((d) => d[selectedCharacteristic1] === char1Value)
        : chartData.filter(
            (d) =>
              d[selectedCharacteristic1] === char1Value &&
              d[selectedCharacteristic2] === char2Value
          );

      let formattedValue;
      switch (selectedMeasure) {
        case "count_of_programs":
          formattedValue = `${filteredData.length} programs`;
          break;
        case "average_funding":
          formattedValue = `Average Funding: ${formatFundingInBillions(
            calculateAverageFunding(filteredData)
          )}`;
          break;
        default: // total_funding
          formattedValue = `Total Funding: ${formatFundingInBillions(
            calculateTotalFunding(filteredData)
          )}`;
      }

      bar
        .style("cursor", "pointer")
        .on("mouseover", (event) => {
          tooltip
            .style("visibility", "visible")
            .html(
              sameOption
                ? `${selectedCharacteristic1.replace(
                    " (short)",
                    ""
                  )}: ${char1Value}<br>${formattedValue}`
                : `${selectedCharacteristic1.replace(
                    " (short)",
                    ""
                  )}: ${char1Value}<br>` +
                    `${selectedCharacteristic2.replace(
                      " (short)",
                      ""
                    )}: ${char2Value}<br>${formattedValue}`
            )
            .style("left", `${event.pageX + 20}px`)
            .style("top", `${event.pageY + 10}px`);
        })
        .on("mousemove", (event) => {
          tooltip
            .style("left", `${event.pageX + 20}px`)
            .style("top", `${event.pageY + 10}px`);
        })
        .on("mouseout", () => {
          tooltip.style("visibility", "hidden");
        });
    });
  }

  const programsChartLabels = {
    total_funding: "Total Funding (In Billions of USD)",
    average_funding: "Average Funding (In Billions of USD)",
    count_of_programs: "Count of Programs",
  };

  Alpine.data("dashboardData", () => ({
    selectedType: "programs", // values: "programs" and "evaluations"
    selectedCharacteristic1: "Agency (short)",
    selectedCharacteristic2: "Program Type",
    selectedMeasure: "total_funding",
    selectedBarFilter: null,
    tableData: [],

    selectedCharacteristic1_eval: "Agency (short)",
    allPrograms: [],
    selectedProgram: "all",
    tableData_eval: [],

    programData: [],
    evalData: [],

    loadData() {
      Promise.all([
        d3.csv("/assets/js/arp/prog_data.csv"),
        d3.csv("/assets/js/arp/eval_data.csv"),
      ])
        .then(([programData, evaluationData]) => {
          this.programData = programData;
          this.evalData = evaluationData;

          this.allPrograms = [...new Set(this.evalData.map((d) => d.Program))];

          this.updateProgramsChart();
          this.updateTableData();

          this.updateEvaluationsChart();
          this.updateEvaluationsTableData();
        })
        .catch((error) => {
          console.error("Error loading program explorer data:", error);
        });
    },

    formatFunding(value) {
      if (value === "N/A") return "N/A";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    },

    getFilterIndicatorText() {
      if (!this.selectedBarFilter) return "";

      const sameOption =
        this.selectedCharacteristic1 === this.selectedCharacteristic2;
      const [char1Value, char2Value] = sameOption
        ? [this.selectedBarFilter.value, this.selectedBarFilter.value]
        : this.selectedBarFilter.value.split(" | ");

      return sameOption
        ? `<em>Filtered by</em>: ${this.selectedCharacteristic1.replace(
            " (short)",
            ""
          )} = ${char1Value}`
        : `<em>Filtered by</em>: ${this.selectedCharacteristic1.replace(
            " (short)",
            ""
          )} = ${char1Value}, ${this.selectedCharacteristic2.replace(
            " (short)",
            ""
          )} = ${char2Value}`;
    },

    updateProgramsChart() {
      const programsChartDiv = document.querySelector("#programs-chart");
      programsChartDiv.innerHTML = "";

      // Pre-process data if needed
      let chartData = [...this.programData];
      if (
        this.selectedCharacteristic1 === "Intended Population" ||
        this.selectedCharacteristic1 === "Funding Recipient(s)" ||
        this.selectedCharacteristic1 === "Program Type"
      ) {
        chartData = explodeField(chartData, this.selectedCharacteristic1);
      }
      if (
        this.selectedCharacteristic2 === "Intended Population" ||
        this.selectedCharacteristic2 === "Funding Recipient(s)" ||
        this.selectedCharacteristic2 === "Program Type"
      ) {
        chartData = explodeField(chartData, this.selectedCharacteristic2);
      }

      const sameOption =
        this.selectedCharacteristic1 === this.selectedCharacteristic2;

      const plot = Plot.plot({
        style: {
          width: "100%",
        },
        marginBottom: 60,
        marginLeft: 50,
        y: {
          label: programsChartLabels[this.selectedMeasure],
          labelAnchor: "center",
          labelOffset: 45,
          line: true,
          transform:
            this.selectedMeasure !== "count_of_programs"
              ? (d) => d / 1e9 // Convert to billions
              : null,
          tickFormat: (d) => d.toFixed(0),
          labelArrow: "none",
        },
        x: {
          label: this.selectedCharacteristic1.replace(" (short)", ""),
          labelOffset: 55,
          line: true,
          tickSize: 0,
          tickFormat: (d) => wrapText(d, 12),
        },
        color: {
          legend: sameOption ? false : true,
          label: sameOption ? null : this.selectedCharacteristic2,
          className: "legend-item",
        },
        marks: [
          Plot.barY(
            chartData,
            sameOption
              ? Plot.groupX(
                  {
                    y:
                      this.selectedMeasure === "count_of_programs"
                        ? "count"
                        : this.selectedMeasure === "average_funding"
                        ? "mean"
                        : "sum",
                  },
                  {
                    x: (d) => d[this.selectedCharacteristic1],
                    y: (d) => d["Funding Level"], // ignored when y data aggregation is "count"
                    fill: (d) => d[this.selectedCharacteristic1],
                    stroke: "black",
                    strokeWidth: 0.5,
                    ariaLabel: (d) => d[0][this.selectedCharacteristic1],
                  }
                )
              : Plot.stackY(
                  Plot.groupX(
                    {
                      y:
                        this.selectedMeasure === "count_of_programs"
                          ? "count"
                          : this.selectedMeasure === "average_funding"
                          ? "mean"
                          : "sum",
                    },
                    {
                      x: (d) => d[this.selectedCharacteristic1],
                      y: (d) => d["Funding Level"],
                      fill: (d) => d[this.selectedCharacteristic2],
                      stroke: "black",
                      strokeWidth: 0.5,
                      ariaLabel: (d) =>
                        `${d[0][this.selectedCharacteristic1]} | ${
                          d[0][this.selectedCharacteristic2]
                        }`,
                    }
                  )
                )
          ),
          Plot.text(
            chartData,
            sameOption
              ? Plot.groupX(
                  {
                    y:
                      this.selectedMeasure === "count_of_programs"
                        ? "count"
                        : this.selectedMeasure === "average_funding"
                        ? "mean"
                        : "sum",
                    text: (d) =>
                      this.selectedMeasure === "count_of_programs"
                        ? d.length.toString()
                        : formatFundingInBillions(
                            this.selectedMeasure === "average_funding"
                              ? calculateAverageFunding(d)
                              : calculateTotalFunding(d)
                          ),
                  },
                  {
                    x: (d) => d[this.selectedCharacteristic1],
                    y: (d) => d["Funding Level"],
                    dy: -10,
                  }
                )
              : Plot.stackY(
                  Plot.groupX(
                    {
                      y:
                        this.selectedMeasure === "count_of_programs"
                          ? "count"
                          : this.selectedMeasure === "average_funding"
                          ? "mean"
                          : "sum",
                      text: (d) =>
                        this.selectedMeasure === "count_of_programs"
                          ? d.length.toString()
                          : this.selectedMeasure === "average_funding"
                          ? calculateAverageFunding(d) / 1e9 > 28
                            ? formatFundingInBillions(
                                calculateAverageFunding(d)
                              )
                            : ""
                          : calculateTotalFunding(d) / 1e9 > 28
                          ? formatFundingInBillions(calculateTotalFunding(d))
                          : "",
                    },
                    {
                      x: (d) => d[this.selectedCharacteristic1],
                      y: (d) => d["Funding Level"],
                      z: (d) => d[this.selectedCharacteristic2],
                      fontSize: 9,
                      pointerEvents: "none",
                    }
                  )
                )
          ),
        ],
      });

      programsChartDiv.appendChild(plot);

      addTooltipsToAxisLabels(
        "programs-chart",
        this.programData,
        this.selectedCharacteristic1
      );

      if (!sameOption) {
        addTooltipsToLegends(
          "programs-chart",
          this.programData,
          this.selectedCharacteristic2
        );
      }

      addTooltipsToBars(
        "programs-chart",
        chartData,
        this.selectedMeasure,
        this.selectedCharacteristic1,
        this.selectedCharacteristic2
      );

      d3.selectAll(`#programs-chart svg g[aria-label="bar"] rect`)
        .style("cursor", "pointer") // Add pointer cursor
        .on("click", (event, d) => {
          const clickedBar = d3.select(event.currentTarget);
          const value = clickedBar.attr("aria-label");

          this.selectedBarFilter = {
            characteristic: sameOption
              ? this.selectedCharacteristic1
              : this.selectedCharacteristic2,
            value: value,
          };
          this.updateTableData();
        });
    },

    programsChartDependencies() {
      return [
        this.selectedCharacteristic1,
        this.selectedCharacteristic2,
        this.selectedMeasure,
      ];
    },

    updateTableData() {
      if (!this.selectedBarFilter) {
        this.tableData = this.programData; // Show all data when no filter
        return;
      }

      const sameOption =
        this.selectedCharacteristic1 === this.selectedCharacteristic2;

      // Parse the values from selectedBarFilter
      const [char1Value, char2Value] = sameOption
        ? [this.selectedBarFilter.value, this.selectedBarFilter.value]
        : this.selectedBarFilter.value.split(" | ");

      // Helper function to check if a field contains a value
      const fieldContains = (fieldValue, searchValue) => {
        if (!fieldValue) return false;
        return fieldValue
          .split(",")
          .map((v) => v.trim())
          .includes(searchValue);
      };

      // Filter by both characteristics when stacked
      this.tableData = this.programData.filter((program) => {
        const char1Match =
          this.selectedCharacteristic1 === "Intended Population" ||
          this.selectedCharacteristic1 === "Funding Recipient(s)" ||
          this.selectedCharacteristic1 === "Program Type"
            ? fieldContains(program[this.selectedCharacteristic1], char1Value)
            : program[this.selectedCharacteristic1] === char1Value;

        if (sameOption) return char1Match;

        const char2Match =
          this.selectedCharacteristic2 === "Intended Population" ||
          this.selectedCharacteristic2 === "Funding Recipient(s)" ||
          this.selectedCharacteristic2 === "Program Type"
            ? fieldContains(program[this.selectedCharacteristic2], char2Value)
            : program[this.selectedCharacteristic2] === char2Value;

        return char1Match && char2Match;
      });
    },

    updateEvaluationsChart() {
      const evaluationsChartDiv = document.querySelector("#evaluations-chart");
      evaluationsChartDiv.innerHTML = "";

      let chartData = [...this.evalData];
      if (
        this.selectedCharacteristic1_eval === "Intended Population" ||
        this.selectedCharacteristic1_eval === "Funding Recipient(s)" ||
        this.selectedCharacteristic1_eval === "Program Type"
      ) {
        chartData = explodeField(chartData, this.selectedCharacteristic1_eval);
      }

      const plot = Plot.plot({
        style: {
          width: "100%",
        },
        marginBottom: 60,
        marginLeft: 50,
        y: {
          label: "Number of Evaluations",
          labelAnchor: "center",
          labelOffset: 45,
          line: true,
          labelArrow: "none",
        },
        x: {
          label: this.selectedCharacteristic1_eval.replace(" (short)", ""),
          labelOffset: 55,
          line: true,
          tickSize: 0,
          tickFormat: (d) => wrapText(d, 12),
        },
        marks: [
          Plot.barY(
            chartData,
            Plot.groupX(
              {
                y: "count",
              },
              {
                x: (d) => d[this.selectedCharacteristic1_eval],
                fill: (d) => d[this.selectedCharacteristic1_eval],
                stroke: "black",
                strokeWidth: 0.5,
              }
            )
          ),
          Plot.text(
            chartData,
            Plot.groupX(
              {
                y: "count",
                text: (d) => d.length.toString(),
              },
              {
                x: (d) => d[this.selectedCharacteristic1_eval],
                dy: -10,
              }
            )
          ),
        ],
      });

      evaluationsChartDiv.appendChild(plot);

      addTooltipsToAxisLabels(
        "evaluations-chart",
        this.evalData,
        this.selectedCharacteristic1_eval
      );
    },

    evaluationsChartDependencies() {
      return [this.selectedCharacteristic1_eval];
    },

    updateEvaluationsTableData() {
      if (this.selectedProgram === "all") {
        this.tableData_eval = this.evalData;
      } else {
        this.tableData_eval = this.evalData.filter(
          (d) => d.Program === this.selectedProgram
        );
      }
    },

    async init() {
      this.loadData();

      this.$watch("programsChartDependencies", () => {
        this.selectedBarFilter = null;
        this.updateProgramsChart();
      });
      this.$watch("selectedBarFilter", () => this.updateTableData());

      this.$watch("evaluationsChartDependencies", () => {
        this.selectedProgram = "all";
        this.updateEvaluationsChart();
      });
      this.$watch("selectedProgram", () => this.updateEvaluationsTableData());
    },
  }));
});
