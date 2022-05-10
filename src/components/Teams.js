import React from "react";
import * as d3 from "d3";

const Teams = ({ teams }) => {
  if (!teams) {
    return <p>Loading...</p>;
  }

  const width = 700,
    height = 700,
    radius = 300;

  const arc = d3
    .arc()
    .innerRadius(10)
    .outerRadius(radius - 35);

  const pie = d3.pie().sort(null).value(1);

  const svg = d3
    .select(".teamy")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const g = svg.selectAll(".arc").data(pie(teams)).enter().append("g");

  g.append("path")
    .attr("d", arc)
    .style("fill", function (d) {
      return d.data.team_first_color;
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
      return d.data.team_name;
    });

  return (
    <div className="teamyx">
      <svg className="teamy" width="700" height="600"></svg>
    </div>
  );
};

export default Teams;
