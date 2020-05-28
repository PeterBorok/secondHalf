import React from 'react';
import {Link} from "react-router-dom";

const EmptyTeamCard = () => {
    return (
        <div className="card">
          <div className="card__image-container">
            <img src={"/images/football_ball.png"} alt="Football ball"/>
          </div>
          <div className="card__content">
            <p className="card__title text--medium">
              {"No Team Added".toUpperCase()}
            </p>
            <div className="card__info">
              <Link to={`/leagues`} className="card__details">
                <div className="text--medium team-details">Browse Leagues</div>
              </Link>
            </div>
          </div>
        </div>
    );
}

export default EmptyTeamCard;