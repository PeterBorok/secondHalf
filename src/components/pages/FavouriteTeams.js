import React, {useContext} from 'react';
import {FavouriteTeamContext} from "../context/FavouriteTeamContext";
import TeamCard from "../TeamCard";
import EmptyTeamCard from "../EmptyTeamCard";

const FavouriteTeams = () => {
  const [favouriteTeams] = useContext(FavouriteTeamContext);

  return (
      <div>
        <main>
          <section className="cards">
            {favouriteTeams.length ?
                favouriteTeams.map((entry) => (
                    <TeamCard entry={entry} key={entry.id}/>
                )) : <EmptyTeamCard/>
            }
          </section>
        </main>
      </div>
  );
}

export default FavouriteTeams;