import React, {useState, useContext} from 'react';
import {FavouriteTeamContext} from "../context/FavouriteTeamContext";
import TeamCard from "../TeamCard";

const FavouriteTeams = () => {
  const [favouriteTeams, setFavouriteTeams] = useContext(FavouriteTeamContext);

  return (
      <div>
        Favourite Teams
        <main>
          <section className="cards">
            {favouriteTeams.map((entry) => (
                <TeamCard entry={entry} key={entry.id}/>
            ))}
          </section>
        </main>

      </div>
  );
}

export default FavouriteTeams;