import React from "react";
import {Link} from "react-router-dom";
import "./navBar.scss";
import { maxRoute, demo2Route } from "../../routes";

class NavBar extends React.Component {
    public render() {
        return (
            <div className={"nav-bar"}>
                <ul>
                    <li>
                        <Link to={maxRoute}>
                            Demo 1
                        </Link>
                    </li>
                    <li>
                        <Link to={demo2Route}>
                            Demo 2
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
