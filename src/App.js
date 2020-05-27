import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {FavouriteProvider} from "./components/context/FavouriteTeamContext";
import Leagues from "./components/Leagues";
import SelectionPage from "./components/pages/SelectionPage";
import LeagueDetails from "./components/LeagueDetails";
import FavouriteTeams from "./components/pages/FavouriteTeams";

import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EnterButton from "./components/EnterButton";

function App() {
  return (
      <Router>
        <FavouriteProvider>
          <div className="App">
              <Header/>
              <Route path="/" exact>

                  <EnterButton/>
              </Route>
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
                exact
                path={'/league/:leagueId'}
                render={() => (
                    <React.Fragment>
                      <SelectionPage/>
                    </React.Fragment>
                )}
            />
            <Route
                path={'/league/details/:leagueId'}
                render={() => (
                    <React.Fragment>
                      <LeagueDetails/>
                    </React.Fragment>
                )}
            />
            <Route
                path={'/team/:teamId'}
                render={() => (
                    <React.Fragment>
                      <div>Team detail page comes here</div>
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
