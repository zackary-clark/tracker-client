import * as React from "react";
import NavBar from "./components/navBar/navBar";
import { Route } from "react-router-dom";
import MaxContainer from "./components/maxes/maxContainer";
import Demo2 from "./components/demo2/demo2";
import { maxRoute, demo2Route } from "./routes";

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <NavBar />
                <Route exact path={maxRoute} component={MaxContainer} />
                <Route exact path={demo2Route} component={Demo2} />
            </React.Fragment>
        );
    }
}

export default App;
