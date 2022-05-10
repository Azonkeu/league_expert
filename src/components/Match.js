import React from "react";
import * as d3 from "d3";

const Match = ({ matches }) => {
  if (!matches) {
    return <p>Loading...</p>;
  }

  const width = 800,
    height = 700,
    radius = 300;

  const arc = d3
    .arc()
    .innerRadius(10)
    .outerRadius(radius - 35);

  const pie = d3.pie().sort(null).value(1);
  const color = d3.scaleOrdinal([
    "#FCD116",
    "#006600",
    "#FF0000",
    "#BC002D",
    "#CF081F",
    "#ED2939",
    "#FECC00",
    "#C60B1E",
    "#002395",
    "#FEDF00",
    "#006847",
    "#0039A6",
  ]);

  const svg = d3
    .select(".matchsvg")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const g = svg.selectAll(".arc").data(pie(matches)).enter().append("g");
  g.append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  g.append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Match: ${d.data.match_id}`;
    });

  g.append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `score: ${d.data.match_home_score}`;
    })
    .style("color", "#fff");

  return (
    <div>
      <div className="matc">
        <svg className="matchsvg" width="800%" height="600"></svg>
      </div>
    </div>
  );
};

export default Match;
