import React from "react";
import logo from "../image/soccerBall.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">

              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <div className="navbar-brand" style={navbarStyle}>
                        <img src={logo} width="auto" height="30px"
                             className="d-inline-block align-top" alt=""/>
                        Home
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link to="/favourites">
                        <div className="nav-link" style={navbarStyle}>Favourite Teams</div>
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <div className="nav-link dropdown-toggle" id="navbarDropdown"
                           role="button" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false" style={navbarStyle}>
                        Choose your league
                      </div>
                      <div className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                        <Link to="/leagues">
                          <div className="dropdown-item">All leagues</div>
                        </Link>
                        <div className="dropdown-divider"/>
                        <Link to="/league/4328">
                          <div className="dropdown-item">England</div>
                        </Link>
                        <Link to="/league/4334">
                          <div className="dropdown-item">France</div>
                        </Link>
                        <Link to="/league/4331">
                          <div className="dropdown-item">Germany</div>
                        </Link>
                        <Link to="/league/4332">
                          <div className="dropdown-item">Italy</div>
                        </Link>
                        <Link to="/league/4335">
                          <div className="dropdown-item">Spain</div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                           aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
          </nav>
        </div>
      </div>
  );
};

const navbarStyle = {
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1.05em"
}

export default Navbar;