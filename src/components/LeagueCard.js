import React from 'react';
import {Link} from "react-router-dom";

const LeagueCard = (props) => {
  return (
      <div className="card">
        <div className="card__image-container">
          <img src={props.entry.badge} alt={props.entry.league}/>
        </div>
        <div className="card__content">
          <p className="card__title text--medium">
            {props.entry.league}
          </p>
          <div className="card__info">
            <Link to={`/league/details/${props.entry.id}`}>
              <div className="text--medium league-details">Details</div>
            </Link>
            <Link to={`/league/${props.entry.id}`} className="card__teams">
              <div className="text--medium team-list">Teams</div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default LeagueCard;

