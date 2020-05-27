import React from "react";
import logo from "../image/soccerBall.png";

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
                                        <a className="navbar-brand" href="#">
                                            <img src={logo} width="auto" height="30"
                                                 className="d-inline-block align-top" alt=""></img>
                                                Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Valami plusz oldal</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Choose your league
                                        </a>
                                        <div className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">England</a>
                                            <a className="dropdown-item" href="#">France</a>
                                            <a className="dropdown-item" href="#">Germany</a>
                                            <a className="dropdown-item" href="#">Italy</a>
                                            <a className="dropdown-item" href="#">Spain</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Favourites</a>
                                        </div>
                                    </li>

                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search"></input>
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
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;