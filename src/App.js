import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Leagues from "./components/Leagues";

import "./App.css";

function App() {
  return (
      <Router>
        <div className="App">
          {/*Selection page route will be here*/}
          <Route path='/leagues'
          render={()=> (<React.Fragment>
            <Leagues/>
          </React.Fragment>)}
          />
        </div>
        ;
      </Router>
  );
}

export default App;
