import React from "react";
import * as d3 from "d3";

const Players = ({ players }) => {
  // group the data according to countries
  const setOne = players.filter((person) => person.country_name === "Russia");
  const setTwo = players.filter((person) => person.country_name === "England");
  const setThree = players.filter(
    (person) => person.country_name === "Denmark"
  );
  const setFour = players.filter((person) => person.country_name === "Belgium");
  const setFive = players.filter((person) => person.country_name === "Mexico");
  const setSix = players.filter((person) => person.country_name === "Colombia");
  const setSeven = players.filter((person) => person.country_name === "Brazil");
  const setEight = players.filter(
    (person) => person.country_name === "Argentina"
  );
  const setNine = players.filter((person) => person.country_name === "Spain");
  const setTen = players.filter((person) => person.country_name === "Uruguay");
  const setEleven = players.filter(
    (person) => person.country_name === "France"
  );
  const setTwelve = players.filter(
    (person) => person.country_name === "Switzerland"
  );
  const setThirt = players.filter(
    (person) => person.country_name === "Croatia"
  );
  const setFourt = players.filter((person) => person.country_name === "Sweden");
  const setFith = players.filter((person) => person.country_name === "Japan");
  const setSixt = players.filter(
    (person) => person.country_name === "Portugal"
  );

  const sum = (arr) => {
    return `${arr.length} players in`;
  };

  if (!players) {
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
    .select(".playe")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const g = svg.selectAll(".arc").data(pie(setOne)).enter().append("g");
  g.append("path").attr("d", arc).style("fill", "#0039A6");

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
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  g.append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setOne));

  g.append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Russia");

  const svgOne = d3
    .select(".playeone")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gOne = svgOne.selectAll(".arc").data(pie(setTwo)).enter().append("g");
  gOne
    .append("path")
    .attr("d", arc)
    .style("fill", "#CF081F")
    .style("border-color", "#fff");

  gOne
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gOne
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setTwo));

  gOne
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("England");

  const svgTwo = d3
    .select(".playetwo")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gTwo = svgTwo.selectAll(".arc").data(pie(setThree)).enter().append("g");
  gTwo.append("path").attr("d", arc).style("fill", "#C603C0");

  gTwo
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gTwo
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setThree));

  gTwo
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Denmark");

  const svgThree = d3
    .select(".playethree")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gThree = svgThree
    .selectAll(".arc")
    .data(pie(setFour))
    .enter()
    .append("g");
  gThree.append("path").attr("d", arc).style("fill", "#ED2939");

  gThree
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gThree
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setFour));

  gThree
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Belgium");

  const svgFour = d3
    .select(".playefour")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFour = svgFour
    .selectAll(".arc")
    .data(pie(setFive))
    .enter()
    .append("g");
  gFour.append("path").attr("d", arc).style("fill", "#006847");

  gFour
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gFour
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setFive));

  gFour
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Mexico");

  const svgFive = d3
    .select(".playefive")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFive = svgFive.selectAll(".arc").data(pie(setSix)).enter().append("g");
  gFive.append("path").attr("d", arc).style("fill", "#FCD116");

  gFive
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gFive
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setSix));

  gFive
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Colombia");

  const svgSix = d3
    .select(".playesix")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gSix = svgSix.selectAll(".arc").data(pie(setSeven)).enter().append("g");
  gSix.append("path").attr("d", arc).style("fill", "#FEDF00");

  gSix
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gSix
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setSeven));

  gSix
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Brazil");

  const svgSeven = d3
    .select(".playeseven")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gSeven = svgSeven
    .selectAll(".arc")
    .data(pie(setEight))
    .enter()
    .append("g");
  gSeven.append("path").attr("d", arc).style("fill", "#74ACDF");

  gSeven
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gSeven
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setEight));

  gSeven
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Argentina");

  const svgEight = d3
    .select(".playex")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gEight = svgEight
    .selectAll(".arc")
    .data(pie(setNine))
    .enter()
    .append("g");
  gEight.append("path").attr("d", arc).style("fill", "#C60B1E");

  gEight
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gEight
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setNine));

  gEight
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Spain");

  const svgNine = d3
    .select(".playeninx")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gNine = svgNine.selectAll(".arc").data(pie(setTen)).enter().append("g");
  gNine.append("path").attr("d", arc).style("fill", "#FCD116");

  gNine
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gNine
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setTen));

  gNine
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Uruguay");

  const svgTen = d3
    .select(".playeten")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gTen = svgTen
    .selectAll(".arc")
    .data(pie(setEleven))
    .enter()
    .append("g");
  gTen.append("path").attr("d", arc).style("fill", "#002395");

  gTen
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gTen
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setEleven));

  gTen
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("France");

  const svgEleven = d3
    .select(".playeleven")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gEleven = svgEleven
    .selectAll(".arc")
    .data(pie(setTwelve))
    .enter()
    .append("g");
  gEleven.append("path").attr("d", arc).style("fill", "#FF0000");

  gEleven
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gEleven
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setTwelve));

  gEleven
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Switzerland");

  const svgTwelve = d3
    .select(".playetwelve")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gTwelve = svgTwelve
    .selectAll(".arc")
    .data(pie(setThirt))
    .enter()
    .append("g");
  gTwelve.append("path").attr("d", arc).style("fill", "#FF0000");

  gTwelve
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gTwelve
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setThirt));

  gTwelve
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Croatia");

  const svgThirt = d3
    .select(".playethir")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gThirt = svgThirt
    .selectAll(".arc")
    .data(pie(setFourt))
    .enter()
    .append("g");
  gThirt.append("path").attr("d", arc).style("fill", "#FECC00");

  gThirt
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gThirt
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setFourt));

  gThirt
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Sweden");

  const svgFourth = d3
    .select(".playefourth")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFourth = svgFourth
    .selectAll(".arc")
    .data(pie(setFith))
    .enter()
    .append("g");
  gFourth.append("path").attr("d", arc).style("fill", "#BC002D");

  gFourth
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gFourth
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setFith));

  gFourth
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Japan");

  const svgFith = d3
    .select(".playefithx")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const gFith = svgFith
    .selectAll(".arc")
    .data(pie(setSixt))
    .enter()
    .append("g");
  gFith.append("path").attr("d", arc).style("fill", "#006600");

  gFith
    .append("text")
    .attr("transform", function (d) {
      const _d = arc.centroid(d);
      _d[0] *= 1.5; //multiply by a constant factor
      _d[1] *= 1.5; //multiply by a constant factor
      return "translate(" + _d + ")";
    })
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(function (d) {
      if (d.data.player_known_name === "") {
        return d.data.player_name;
      } else {
        return d.data.player_known_name;
      }
    });

  gFith
    .append("text")
    .attr("dy", ".50em")
    .style("text-anchor", "middle")
    .text(sum(setSixt));

  gFith
    .append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text("Portugal");

  return (
    <div className="play">
      <h1 className="title">Players in each Country</h1>
      <div className="group">
        <div className="cont">
          <svg className="playeninx" width="700" height="600"></svg>
        </div>
        <div className="container">
          <svg className="playe" width="700" height="600"></svg>
        </div>
        <div className="contain">
          <svg className="playeone" width="700" height="600"></svg>
        </div>
        <div className="contai">
          <svg className="playetwo" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playethree" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playefour" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playefive" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playesix" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playeseven" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playex" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playeten" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playeleven" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playetwelve" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playethir" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playefourth" width="700" height="600"></svg>
        </div>
        <div className="cont">
          <svg className="playefithx" width="700" height="600"></svg>
        </div>
      </div>
    </div>
  );
};

export default Players;
