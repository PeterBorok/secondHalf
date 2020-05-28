import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {FavouriteTeamContext} from "./context/FavouriteTeamContext";

const TeamCard = (props) => {
  const [favouriteTeams, setFavouriteTeams] = useContext(FavouriteTeamContext);

  const isAlreadyFavourite = () => {
    for (let team of favouriteTeams) {
      if (team.id === props.entry.id) {
        return true;
      }
    }
    return false;
  }

  const addToFavourites = (e) => {
    e.preventDefault();
    if (!isAlreadyFavourite() && !favouriteTeams.includes(props.entry)) {
      setFavouriteTeams([...favouriteTeams, props.entry]);
    }
  };

  const removeFromFavourites = (e) => {
    e.preventDefault();
    let filteredArray = favouriteTeams.filter(currentTeam => currentTeam.id !== props.entry.id)
    setFavouriteTeams(filteredArray);
  };

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
            {isAlreadyFavourite() ?
                <div className="text--medium remove-from-favourites" onClick={removeFromFavourites}>
                  Remove Favourites
                </div>
                : <div className="text--medium add-to-favourites" onClick={addToFavourites}>Add To Favourites</div>
            }
            <Link to={`/team/${props.entry.id}`} className="card__details">
              <div className="text--medium team-details">Details</div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default TeamCard;