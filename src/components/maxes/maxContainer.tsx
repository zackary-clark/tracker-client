import React from "react";
import * as WebClient from "../../webClient";

export default class MaxContainer extends React.Component {
    public render() {
        return (
            <div className={"max-container"}>
                This was rendered by demo 1, which is written in React.
                <button onClick={this.onClick} >GetMaxes</button>
            </div>
        );
    }

    private onClick() {
        console.log(WebClient.getMaxes());
    }
}
