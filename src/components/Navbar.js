import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">

                                    Home
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/about">

                                    About US
                                </a>
                            </li> */}
                        </ul>
                        <div className="form-check form-switch mx-auto">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                            <label
                                className={`form-check-label text-${props.mode === "light" ? "dark" : "light"
                                    } `}
                                htmlFor="flexSwitchCheckDefault"
                            >

                                Enable DarkMode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
//if values are not set
Navbar.defaultProps = {
    title: "enter title",
};
