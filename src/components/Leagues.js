import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Leagues = () => {

  const leagueIDs = [
    {name: 'England', id: 4328},
    {name: 'France', id: 4334},
    {name: 'Germany', id: 4331},
    {name: 'Italy', id: 4332},
    {name: 'Spain', id: 4335}]

  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    for (const entry of leagueIDs) {
      axios
          .get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${entry.id}`)
          .then((res) => {
            setLeagues(prevState => [...prevState,
              {
                id: res.data['leagues'][0]["idLeague"],
                league: res.data['leagues'][0]["strLeague"],
                country: res.data['leagues'][0]["strCountry"],
                description: res.data['leagues'][0]["strDescriptionEN"],
                website: res.data['leagues'][0]["strWebsite"],
                fanart1: res.data['leagues'][0]["strFanart1"],
                fanart2: res.data['leagues'][0]["strFanart2"],
                fanart3: res.data['leagues'][0]["strFanart3"],
                fanart4: res.data['leagues'][0]["strFanart4"],
                banner: res.data['leagues'][0]["strBanner"],
                badge: res.data['leagues'][0]["strBadge"],
                logo: res.data['leagues'][0]["strLogo"],
                poster: res.data['leagues'][0]["strPoster"],
                trophy: res.data['leagues'][0]["strTrophy"]
              }])
          })
    }

  }, [])

  return (
      <div>
        {leagues.map((entry) => (
            <li key={entry.id}>
              {entry.league}
              <img src={entry.trophy} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.poster} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.logo} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.badge} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.banner} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.fanart1} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.fanart2} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.fanart3} alt={entry.league} style={{width: "150px"}}/>
              <img src={entry.fanart4} alt={entry.league} style={{width: "150px"}}/>
            </li>
        ))}
      </div>
  );
}

export default Leagues;