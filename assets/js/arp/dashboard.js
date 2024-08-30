document.addEventListener("alpine:init", () => {
  function parseCurrency(value) {
    return parseFloat(value.replace(/[$,]/g, ""));
  }

  Alpine.data("dashboardData", () => ({
    selectedCharacteristic1: "Agency",
    selectedCharacteristic2: "Program Type",
    selectedMeasure: "Funding Level1", // Default to Funding Level1
    programs: [],
    filteredPrograms: [],

    loadData() {
      d3.csv("/assets/js/arp/dashboard-data.csv").then((data) => {
        this.programs = data;
        this.updateChart();
      });
    },

    updateChart() {
      this.filteredPrograms = this.programs.filter((program) => {
        return (
          program[this.selectedCharacteristic1] &&
          program[this.selectedCharacteristic2]
        );
      });

      const svg = d3.select("#bar-chart");
      svg.selectAll("*").remove();

      const width = +svg.attr("width");
      const height = +svg.attr("height");
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleBand()
        .domain(
          this.filteredPrograms.map((d) => d[this.selectedCharacteristic1])
        )
        .rangeRound([0, chartWidth])
        .padding(0.1);

      // Convert the selected measure to a number using the parseCurrency function
      if (this.selectedMeasure === "Funding Level1") {
        this.filteredPrograms.forEach((d) => {
          d[this.selectedMeasure] = parseCurrency(d[this.selectedMeasure]);
        });
      } else {
        this.filteredPrograms.forEach((d) => {
          d[this.selectedMeasure] = +d[this.selectedMeasure];
        });
      }

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(this.filteredPrograms, (d) => d[this.selectedMeasure] || 0),
        ])
        .nice()
        .rangeRound([chartHeight, 0]);

      g.append("g")
        .selectAll(".bar")
        .data(this.filteredPrograms)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d[this.selectedCharacteristic1]))
        .attr("y", (d) => y(d[this.selectedMeasure]))
        .attr("width", x.bandwidth())
        .attr("height", (d) => chartHeight - y(d[this.selectedMeasure]))
        .attr("fill", "steelblue");

      g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(d3.axisBottom(x));

      g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10));
    },

    init() {
      this.loadData();
      this.$watch("selectedCharacteristic1", () => this.updateChart());
      this.$watch("selectedCharacteristic2", () => this.updateChart());
      this.$watch("selectedMeasure", () => this.updateChart());
    },
  }));
});
