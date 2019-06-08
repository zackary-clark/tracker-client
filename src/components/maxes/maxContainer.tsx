import React from "react";
import * as WebClient from "../../webClient";
import Button from "../muiWrapper/button";

export default class MaxContainer extends React.Component {
    public render() {
        return (
            <div className={"max-container"}>
                This was rendered by demo 1, which is written in React.
                <Button onClick={this.onClick} variant={"contained"} label={"GetMaxes"} />
            </div>
        );
    }

    private onClick() {
        WebClient.getMaxes()
            .then(res => console.log(res.json()));
    }
}
