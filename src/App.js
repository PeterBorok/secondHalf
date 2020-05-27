import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EnterButton from "./components/EnterButton";

function App() {
    return <Router>
        <div className="App">
            <Header/>
            <Route path="/">
                <EnterButton/>
            </Route>
        </div>
    </Router>;
}

export default App;

