import React, {useState, createContext} from "react";

export const FavouriteTeamContext = createContext();

export const FavouriteProvider = (props) => {
  const [favouriteTeams, setFavouriteTeams] = useState([
    {
      badge: "https://www.thesportsdb.com/images/media/team/badge/a1af2i1557005128.png",
      formedYear: "1892",
      id: "133604",
      name: "Arsenal",
      stadiumName: "Emirates Stadium"
    },
    {
      badge: "https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png",
      formedYear: "1905",
      id: "133610",
      name: "Chelsea",
      stadiumName: "Stamford Bridge"
    }
  ]);

  return (
      <FavouriteTeamContext.Provider value={[favouriteTeams, setFavouriteTeams]}>
        {props.children}
      </FavouriteTeamContext.Provider>
  );
};