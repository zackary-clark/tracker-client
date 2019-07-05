import React from "react";
import {getMaxes} from "../../webClient";
import Button from "../wrappers/button";

interface IMaxContainerState {
    maxes: any[]; // TODO: no anys!
}
export default class MaxContainer extends React.Component<React.HTMLAttributes<HTMLElement>, IMaxContainerState> {
    public constructor(props: React.HTMLAttributes<HTMLElement>) {
        super(props);
        this.state = {maxes: []};
    }

    public render() {
        return (
            <div className={"max-container"}>
                <Button onClick={this.onClick} variant={"contained"} >GetMaxes</Button>
            </div>
        );
    }

    private onClick = (): void => {
        getMaxes()
            .then(res => res.json())
            .then(maxes => this.setState({maxes}));
    }
}
