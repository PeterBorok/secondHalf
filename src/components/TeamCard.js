import React from 'react';
import {Link} from "react-router-dom";

const TeamCard = (props) => {
    return (
        <div className="card">
          <div className="card__image-container">
            <img src={props.entry.badge} alt={props.entry.name}/>
          </div>
          <div className="card__content">
            <p className="card__title text--medium">
              {props.entry.name}
            </p>
            <div className="card__info">
              <div className="text--medium add-to-favourites">Add To Favourites</div>
              <Link to={`/team/${props.entry.id}`} className="card__details">
                <div className="text--medium team-details">Details</div>
              </Link>
            </div>
          </div>
        </div>
    );
}

export default TeamCard;