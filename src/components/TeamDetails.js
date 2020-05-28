import React, {useEffect, useState} from 'react';

import {getIdFromUrl} from './Util.js'
import axios from "axios";

const TeamDetails = () => {
  const teamId = getIdFromUrl();

  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
        .get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then((res) => {
          console.log(res.data["teams"][0])
          setTeam({
            id: res.data["teams"][0]["idTeam"],
            name: res.data["teams"][0]["strTeam"],
            badge: res.data["teams"][0]["strTeamBadge"],
            formedYear: res.data["teams"][0]["intFormedYear"],
            stadiumName: res.data["teams"][0]["strStadium"],
            description: res.data["teams"][0]["strDescriptionEN"],
            league: res.data["teams"][0]["strLeague"],
            country: res.data["teams"][0]["strCountry"]
          })
        })
  }, [])

  console.log(team)

  return (
      <div style={containerStyle}>
        <table style={tableStyle}>
          <tbody>
          <tr style={nameRowStyle}>
            <td colSpan="2" style={nameColumnStyle}>{team["name"]}</td>
          </tr>
          <tr style={countryLeagueRowStyle}>
            <td style={countryColumnStyle}>{team["country"]}</td>
            <td style={leagueColumnStyle}>{team["league"]}</td>
          </tr>
          <tr style={imgDescRowStyle}>
            <td style={badgeColumnStyle}>
              <img style={badgeImgStyle} src={team["badge"]} alt="Team Badge"/></td>
            <td>
              Place for shorter thing
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={descColumnStyle}>{team["description"]}</td>
          </tr>
          </tbody>


        </table>
      </div>
  );
};

const containerStyle = {
  textAlign: "center"
}

const tableStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
}

const nameColumnStyle = {
  width: "100%",
  textAlign: "center",
  backgroundColor: "red",
  fontSize: "2.5em",
  fontWeight: "600",
  fontFamily: "Open Sans, sans-serif",
  color: "white"
}

const nameRowStyle = {
  textAlign: "center",
  height: "100px"
}

const countryLeagueRowStyle = {
  textAlign: "center",
  height: "50px"
}

const countryColumnStyle = {
  textAlign: "center",
  width: "50%",
  backgroundColor: "yellow"
}

const leagueColumnStyle = {
  textAlign: "center",
  width: "50%",
  backgroundColor: "blue"
}

const imgDescRowStyle = {
  textAlign: "center",
  height: "250px"
}

const badgeColumnStyle = {
  textAlign: "center",
  width: "50%",
  height: "100%",
  backgroundColor: "blue"
}

const badgeImgStyle = {
  height: "50%",
  padding: "10px"
}

const descColumnStyle = {
  textAlign: "justify",
  height: "100%",
  backgroundColor: "green",
  textOverflow: "hidden",
  whiteSpace: "nowrap",
  maxWidth: "1px",
  maxHeight: "100%"
}

export default TeamDetails;
