import * as React from "react";
import NavBar from "./components/navBar/navBar";
import { Route } from "react-router-dom";
import Demo1 from "./components/demo1/demo1";
import Demo2 from "./components/demo2/demo2";

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <NavBar />
                <Route exact path="/demo1" component={Demo1} />
                <Route exact path="/demo2" component={Demo2} />
            </React.Fragment>
        );
    }
}

export default App;
