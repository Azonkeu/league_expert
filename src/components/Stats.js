import React from "react";
import * as d3 from "d3";

const Stats = ({ stats }) => {
  // group the data according to teams
  const teamSet = stats.filter((person) => person.team_id === 468240);
  const teamSetO = stats.filter((person) => person.team_id === 468237);
  const teamSetTwo = stats.filter((person) => person.team_id === 468245);
  const teamSetThree = stats.filter((person) => person.team_id === 468217);
  const teamSetFour = stats.filter((person) => person.team_id === 468227);
  const teamSetFive = stats.filter((person) => person.team_id === 468239);
  const teamSetSix = stats.filter((person) => person.team_id === 468241);
  const teamSetSeven = stats.filter((person) => person.team_id === 468231);
  const teamSetEight = stats.filter((person) => person.team_id === 468226);
  const teamSetNine = stats.filter((person) => person.team_id === 468236);
  const teamSetTen = stats.filter((person) => person.team_id === 468238);
  const teamSetEleven = stats.filter((person) => person.team_id === 468246);
  const teamSetTwelve = stats.filter((person) => person.team_id === 468244);
  const teamSetThirt = stats.filter((person) => person.team_id === 468230);
  const teamSetFourt = stats.filter((person) => person.team_id === 468217);
  const teamSetFith = stats.filter((person) => person.team_id === 468233);
  const sum = (arr) => {
    return `${arr.length} players`;
  };

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

  if (!stats) {
    return <p>Loading...</p>;
  }

  const width = 700,
    height = 700,
    radius = 300;

  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(radius - 35);

  const pie = d3.pie().sort(null).value(1);

  const svg = d3
    .select(".teamten")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const g = svg.selectAll(".arc").data(pie(teamSet)).enter().append("g");
  g.append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  g.append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.8; //multiply by a constant factor
      _d[1] *= 1.8; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".70em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  g.append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.8;
      _d[1] *= 1.6;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  g.append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSet));

  const svgOne = d3
    .select(".teamone")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gOne = svgOne.selectAll(".arc").data(pie(teamSetO)).enter().append("g");
  gOne
    .append("path")
    .attr("d", arc)
    .style("fill", "#CF081F")
    .style("fill", function (d, i) {
      return color(i);
    });

  gOne
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });
  gOne
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gOne
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetO));

  const svgTwo = d3
    .select(".teamtwo")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gTwo = svgTwo
    .selectAll(".arc")
    .data(pie(teamSetTwo))
    .enter()
    .append("g");
  gTwo
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gTwo
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gTwo
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gTwo
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetTwo));

  const svgThree = d3
    .select(".teamthree")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gThree = svgThree
    .selectAll(".arc")
    .data(pie(teamSetThree))
    .enter()
    .append("g");
  gThree
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gThree
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gThree
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.7;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.7em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gThree
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetThree));

  const svgFour = d3
    .select(".teamfour")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFour = svgFour
    .selectAll(".arc")
    .data(pie(teamSetFour))
    .enter()
    .append("g");
  gFour
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gFour
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gFour
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gFour
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetFour));

  const svgFive = d3
    .select(".teamfive")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFive = svgFive
    .selectAll(".arc")
    .data(pie(teamSetFive))
    .enter()
    .append("g");
  gFive
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gFive
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gFive
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gFive
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(sum(teamSetFive));

  const svgSeven = d3
    .select(".teamseven")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gSeven = svgSeven
    .selectAll(".arc")
    .data(pie(teamSetSeven))
    .enter()
    .append("g");
  gSeven
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gSeven
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gSeven
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gSeven
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetSeven));

  const svgEight = d3
    .select(".teamx")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gEight = svgEight
    .selectAll(".arc")
    .data(pie(teamSetEight))
    .enter()
    .append("g");
  gEight
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gEight
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gEight
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gEight
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetEight));

  const svgNine = d3
    .select(".teamnext")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gNine = svgNine
    .selectAll(".arc")
    .data(pie(teamSetNine))
    .enter()
    .append("g");
  gNine
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gNine
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gNine
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gNine
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetNine));

  const svgTen = d3
    .select(".teamsix")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gTen = svgTen
    .selectAll(".arc")
    .data(pie(teamSetTen))
    .enter()
    .append("g");
  gTen
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gTen
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gTen
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.8;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gTen
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetTen));

  const svgEleven = d3
    .select(".teameleven")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gEleven = svgEleven
    .selectAll(".arc")
    .data(pie(teamSetEleven))
    .enter()
    .append("g");
  gEleven.append("path").attr("d", arc).style("fill", "#FF0000");

  gEleven
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gEleven
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gEleven
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetTwelve));

  const svgTwelve = d3
    .select(".teamtwelve")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gTwelve = svgTwelve
    .selectAll(".arc")
    .data(pie(teamSetTwelve))
    .enter()
    .append("g");
  gTwelve
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gTwelve
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gTwelve
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gTwelve
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetTwelve));

  const svgFourth = d3
    .select(".teamfourth")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFourth = svgFourth
    .selectAll(".arc")
    .data(pie(teamSetFourt))
    .enter()
    .append("g");
  gFourth
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gFourth
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gFourth
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gFourth
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetFourt));

  const svgFith = d3
    .select(".teamfithx")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFith = svgFith
    .selectAll(".arc")
    .data(pie(teamSetFith))
    .enter()
    .append("g");
  gFith
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gFith
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gFith
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gFith
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetFith));

  const svgSix = d3
    .select(".team")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gSix = svgSix
    .selectAll(".arc")
    .data(pie(teamSetSix))
    .enter()
    .append("g");
  gSix
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gSix
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gSix
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gSix
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetSix));

  const svgThirt = d3
    .select(".teamthir")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gThirt = svgThirt
    .selectAll(".arc")
    .data(pie(teamSetThirt))
    .enter()
    .append("g");
  gThirt
    .append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return color(i);
    });

  gThirt
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.6;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", "1.8em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Player: ${d.data.player_id}`;
    });

  gThirt
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5;
      _d[1] *= 1.5;
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `Goals: ${d.data.goals}`;
    });

  gThirt
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(teamSetThirt));

  return (
    <div>
      <h1 className="title">Teams and Players</h1>
      <div className="group">
        <div className="container">
          <svg className="teamone" width="700" height="600"></svg>
        </div>
        <div className="contain">
          <svg className="teamtwo" width="700" height="600"></svg>
        </div>
        <div className="contai">
          <svg className="teamthree" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamfour" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamfive" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamseven" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamx" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamnext" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamsix" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teameleven" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamtwelve" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamfourth" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamfithx" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="team" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamthir" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="teamten" width="700" height="600"></svg>
        </div>
      </div>
    </div>
  );
};

export default Stats;
