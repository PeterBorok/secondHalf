import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {getIdFromUrl} from '../Util.js'
import TeamCard from "../TeamCard";

const SelectionPage = () => {
  const leagueId = getIdFromUrl();
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
        <section className="cards">
          {teams.map((entry) => (
              <TeamCard entry={entry} key={entry.id}/>
          ))}
        </section>
      </main>
  );
}

export default SelectionPage;