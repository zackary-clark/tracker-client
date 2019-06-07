import React from "react";
import {Link} from "react-router-dom";
import "./navBar.scss";

class NavBar extends React.Component {
    public render() {
        return (
            <div className={"nav-bar"}>
                <ul>
                    <li>
                        <Link to="/demo1">
                            Demo 1
                        </Link>
                    </li>
                    <li>
                        <Link to="/demo2">
                            Demo 2
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
