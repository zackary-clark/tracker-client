import React from "react";
import {mount, ReactWrapper} from "enzyme";
import app2 from "./app2";
import App2 from "./app2";

describe("App2", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<App2 />);
    });
    
    it("Renders App 2", () => {
        expect(wrapper.exists()).toBeTruthy();
    });
});
