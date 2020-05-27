import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Leagues from "./components/Leagues";
import SelectionPage from "./components/pages/SelectionPage";

import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EnterButton from "./components/EnterButton";

function App() {
    return (
        <Router>
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
                            <Navbar/>
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
            </div>
        </Router>
    );
}

export default App;
