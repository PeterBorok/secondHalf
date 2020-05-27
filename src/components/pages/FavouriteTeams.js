import React, {useState, useContext} from 'react';
import {FavouriteTeamContext} from "../context/FavouriteTeamContext";

const FavouriteTeams = () => {
  const [favouriteTeams, setFavouriteTeams] = useContext(FavouriteTeamContext);

  return (
      <div>
        Favourite Teams
        <main>
          <section className="league-cards">
            {favouriteTeams.map((entry) => (
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

      </div>
  );
}

export default FavouriteTeams;