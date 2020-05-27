import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {FavouriteProvider} from "./components/context/FavouriteTeamContext";
import Leagues from "./components/Leagues";
import SelectionPage from "./components/pages/SelectionPage";

import "./App.css";
import FavouriteTeams from "./components/pages/FavouriteTeams";

function App() {
  return (
      <Router>
        <FavouriteProvider>
          <div className="App">
            {/*Selection page route will be here*/}
            <Route
                exact
                path='/leagues'
                render={() => (
                    <React.Fragment>
                      <Leagues/>
                    </React.Fragment>)}
            />
            <Route
                path={'/league/:leagueId'}
                render={() => (
                    <React.Fragment>
                      <SelectionPage/>
                    </React.Fragment>
                )}
            />
            <Route
                path={'/favourites'}
                render={() => (
                    <React.Fragment>
                      <FavouriteTeams/>
                    </React.Fragment>
                )}
            />

          </div>
        </FavouriteProvider>
      </Router>
  );
}

export default App;
