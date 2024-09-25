document.addEventListener("alpine:init", () => {
  function parseCurrency(value) {
    return parseFloat(value.replace(/[$,]/g, ""));
  }

  function wrapText(text, maxLength) {
    if (text.length <= maxLength) return text;
    const words = text.split(" ");
    let lines = [];
    let currentLine = "";
    words.forEach((word) => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);
    return lines.join("\n");
  }

  const programsChartLabels = {
    total_funding: "Total Funding (In Billions of USD)",
    average_funding: "Average Funding (In Billions of USD)",
    count_of_programs: "Count of Programs",
  };

  Alpine.data("dashboardData", () => ({
    selectedType: "programs", // values: "programs" and "evaluations"
    selectedCharacteristic1: "Agency",
    selectedCharacteristic2: "Program Type",
    selectedMeasure: "total_funding",
    data: [],

    loadData() {
      d3.csv("/assets/js/arp/dashboard-data.csv").then((loadedData) => {
        this.data = loadedData;
        this.updateProgramsChart();
      });
    },

    updateProgramsChart() {
      const programsChartDiv = document.querySelector("#programs-chart");
      programsChartDiv.innerHTML = "";

      const sameOption =
        this.selectedCharacteristic1 === this.selectedCharacteristic2;

      let measureKey;
      let filteredData;
      if (this.selectedMeasure === "total_funding") {
        measureKey = "Funding Level1";
        filteredData = this.data
          .filter((d) => d[measureKey] !== "")
          .map((d) => ({
            ...d,
            "Funding Level1": parseCurrency(d[measureKey]),
          }));
      } else if (this.selectedMeasure === "average_funding") {
        measureKey = "average_funding";
        filteredData = this.data
          .filter((d) => d["Funding Level1"] !== "")
          .map((d) => ({
            ...d,
            average_funding:
              parseCurrency(d["Funding Level1"]) / d["number of programs"],
          }));
      } else if (this.selectedMeasure === "count_of_programs") {
        measureKey = "number of programs";
        filteredData = this.data.filter((d) => d["number of programs"] !== "");
      }

      const plot = Plot.plot({
        style: {
          width: "100%",
        },
        marginBottom: 90,
        marginLeft: 50,
        y: {
          label: programsChartLabels[this.selectedMeasure],
          labelAnchor: "center",
          labelOffset: 45,
          line: true,
          transform: (d) => d / 1e9,
          tickFormat: (d) => d.toFixed(0),
          labelArrow: "none",
        },
        x: {
          label: this.selectedCharacteristic1,
          labelOffset: 80,
          line: true,
          tickSize: 0,
          tickFormat: (d) => wrapText(d, 9),
        },
        color: {
          legend: sameOption ? false : true,
          label: sameOption ? null : this.selectedCharacteristic2,
          className: "legend-item",
        },
        marks: [
          Plot.barY(
            filteredData,
            sameOption
              ? Plot.groupX(
                  { y: "sum" },
                  {
                    x: (d) => d[this.selectedCharacteristic1],
                    y: (d) => d[measureKey],
                    fill: (d) => d[this.selectedCharacteristic1],
                    stroke: "black",
                    strokeWidth: 0.5,
                  }
                )
              : Plot.stackY(
                  Plot.groupX(
                    { y: "sum" },
                    {
                      x: (d) => d[this.selectedCharacteristic1],
                      y: (d) => d[measureKey],
                      fill: (d) => d[this.selectedCharacteristic2],
                      stroke: "black",
                      strokeWidth: 0.5,
                    }
                  )
                )
          ),
        ],
      });

      programsChartDiv.appendChild(plot);
    },

    programsChartDependencies() {
      return [
        this.selectedCharacteristic1,
        this.selectedCharacteristic2,
        this.selectedMeasure,
      ];
    },

    async init() {
      this.loadData();
      this.$watch("programsChartDependencies", () =>
        this.updateProgramsChart()
      );
    },
  }));
});
