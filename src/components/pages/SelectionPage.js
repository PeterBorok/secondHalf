import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "./SelectionPage.css";

const SelectionPage = () => {
  const getIdFromUrl = () => {
    let urlFragments = window.location.href.split("/");
    return urlFragments[urlFragments.length - 1];
  };
  let leagueId = getIdFromUrl();

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
        .get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${leagueId}`)
        .then((res) => {
          res.data["teams"].map((team) => (
              setTeams(prevState => [...prevState,
                {
                  id: team["idTeam"],
                  name: team["strTeam"],
                  badge: team["strTeamBadge"],
                  formedYear: team["intFormedYear"],
                  stadiumName: team["strStadium"]
                }])
          ))
        })
  }, [])

  return (
      <main>
        <section className="league-cards">
          {teams.map((entry) => (
              <div className="league-card" key={entry.id}>
                <div className="league-card__image-container">
                  <img src={entry.badge} alt={entry.name}/>
                </div>
                <div className="league-card__content">
                  <p className="league-card__title text--medium">
                    {entry.name}
                  </p>
                  <div className="league-card__info">
                    <p className="text--medium">{entry.stadiumName}</p>
                    <p className="league-card__teams text--medium">{entry.formedYear}</p>
                  </div>
                </div>
              </div>
          ))}
        </section>
      </main>
  );
}

export default SelectionPage;