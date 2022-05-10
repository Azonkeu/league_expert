import React, { useState, useEffect } from "react";
import Players from "./Players";
import Teams from "./Teams";
import Match from "./Match";
import Stats from "./Stats";

const Home = () => {
  const [teams, setTeams] = useState(() => {
    const saved = localStorage.getItem("Teams");
    const parsed = JSON.parse(saved);
    return parsed || [{}];
  });
  const [player, setplayer] = useState(() => {
    const saved = localStorage.getItem("Players");
    const parsed = JSON.parse(saved);
    return parsed || [{}];
  });

  const [match, setMatch] = useState(() => {
    const saved = localStorage.getItem("Matches");
    const parsed = JSON.parse(saved);
    return parsed || [{}];
  });
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem("Stats");
    const parsed = JSON.parse(saved);
    return parsed || [{}];
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/match.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (search === "") {
          setMatch(data);
          window.localStorage.setItem("Ma", JSON.stringify(match));
        } else {
          const filt = data.filter(
            (person) => person.match_home_score === Number(search)
          );
          window.localStorage.setItem("Ma", JSON.stringify(match));
          return setMatch(filt);
        }
      });
  }, [search, match]);

  useEffect(() => {
    fetch(`http://localhost:3000/player.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (search === "") {
          setplayer(data);
          window.localStorage.setItem("Play", JSON.stringify(player));
        } else {
          const filt = data.filter((person) => {
            return person.player_name
              .toLowerCase()
              .includes(search.toLowerCase());
          });
          setplayer(filt);
          window.localStorage.setItem("Play", JSON.stringify(player));
        }
      });
  }, [search, player]);

  useEffect(() => {
    fetch(`http://localhost:3000/team.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (search === "") {
          setTeams(data);
          window.localStorage.setItem("Tea", JSON.stringify(teams));
        } else {
          const filt = data.filter((person) => {
            return person.team_name
              .toLowerCase()
              .includes(search.toLowerCase());
          });
          setTeams(filt);
          window.localStorage.setItem("Tea", JSON.stringify(teams));
        }
      });
  }, [search, teams]);

  useEffect(() => {
    fetch(`http://localhost:3000/stats.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (search === "") {
          setStats(data);
          window.localStorage.setItem("Sta", JSON.stringify(stats));
        } else {
          const filt = data.filter(
            (person) => person.team_id === Number(search)
          );
          window.localStorage.setItem("Sta", JSON.stringify(stats));
          return setStats(filt);
        }
      });
  }, [search, stats]);
  return (
    <div>
      <div className="img">
        <input
          type="text"
          placeholder="Search for players, teams, scores..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="groupx">
          <Teams teams={teams} />
          <Match matches={match} />
        </div>
      </div>
      <div className="sec">
        <Players players={player} />
      </div>
      <div className="third">
        <Stats stats={stats} />
      </div>
    </div>
  );
};

export default Home;
