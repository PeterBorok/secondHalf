import React, {useState, createContext} from "react";

export const FavouriteTeamContext = createContext(undefined, undefined);

export const FavouriteProvider = (props) => {
  const [favouriteTeams, setFavouriteTeams] = useState([]);

  return (
      <FavouriteTeamContext.Provider value={[favouriteTeams, setFavouriteTeams]}>
        {props.children}
      </FavouriteTeamContext.Provider>
  );
};