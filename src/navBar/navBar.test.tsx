import React from "react";
import {mount, ReactWrapper} from "enzyme";
import NavBar from "./navBar";

describe("NavBar", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<NavBar />);
    });
    
    it("Renders two links for the apps", () => {
        expect(wrapper.find("li").length).toBe(2);
    });
});
