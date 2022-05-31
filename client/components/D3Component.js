import * as d3 from "d3";

class D3Component {
  constructor({ containerEl, data, onClick }) {
    this.containerEl = containerEl;
    this.width = containerEl.offsetWidth;
    this.height = containerEl.offsetHeight;
    this.data = data;
    this.onClick = onClick;
    this.svg = d3
      .select(containerEl)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", `translate(${this.width / 2},${this.height / 2})`); //Sets the position of the g-tag

    this.circlesPadding = 4; //The amount of minimum spacing between the circles
    this.circlesScaleFactor = 8; //Used for setting the scale of the circles
    this.forceStrength = 0.05;

    const minRadius = 10 * this.circlesScaleFactor;

    /**
         * Function for setting the radius of the drawn circles to match selection type. scaleLinear()
         means that a bubble clicked once is exactly 2x the size of the smallest bubble. scaleSqrt()
         would make it >2x the size
         */
    this.radiusScale = d3
      .scaleLinear()
      .domain([0, 2])
      .range([minRadius, minRadius * 2]);

    this.configureGradient(this.svg);
    this.initialiseBubbles();
  }

  //Helper for configuring the gradient
  configureGradient = (svg) => {
    const gradient = svg
      .append("svg:defs")
      .append("svg:linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");

    // Define the gradient colors
    gradient
      .append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#EEAECAFF")
      .attr("stop-opacity", 1);

    gradient
      .append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#94BBE9FF")
      .attr("stop-opacity", 1);
  };

  initialiseBubbles = () => {
    const g = this.svg.selectAll(null).data(this.data).enter().append("g");

    g.append("circle")
        .attr("class", "bubble")
        .attr("fill", "url(#gradient)")
        .style("cursor", "pointer");

    g.append("text")
      .text((data) => data.name)
      .style("text-anchor", "middle")
      .style("font-size", 13)
        .style("cursor", "pointer");

    g.on("mouseup", (e) => {
      this.onClick(e.target.__data__);
      this.updateBubbleSize();
    });

    this.updateBubbleSize();
  };

  runSimulation = () => {
    const g = this.svg.selectAll("g");
    //Function that applies the forces to the elements
    let centerForce = d3
      .forceSimulation()
      .alphaDecay(0.14)
      .force("x", d3.forceX().strength(this.forceStrength))
      .force("y", d3.forceY().strength(this.forceStrength))
      .force(
        "collide",
        d3.forceCollide((data) => {
          return this.radiusScale(data.weight) + this.circlesPadding;
        })
      );

    centerForce.nodes(this.data).on("tick", () => {
      g.attr("transform", (data) => {
        return `translate(${data.x},${data.y})`;
      });
    });
  };

  updateBubbleSize = () => {
    this.svg
      .selectAll("circle")
      .attr("r", (data) => this.radiusScale(data.weight));
    this.runSimulation();
  };
}

export default D3Component;
