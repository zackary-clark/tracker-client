import React from "react";
import "./navBar.scss";
import * as singleSpa from "single-spa";

export default class NavBar extends React.Component {
    public render() {
        return (
            <div className={"root"}>
                <ul>
                    <li onClick={() => singleSpa.navigateToUrl("/app1")}>
                        App 1
                    </li>
                    <li onClick={() => singleSpa.navigateToUrl("/app2")}>
                        App 2
                    </li>
                </ul>
            </div>
        );
    }
}
