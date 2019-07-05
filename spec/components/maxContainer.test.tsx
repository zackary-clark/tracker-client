import * as React from "react";
import { IDecoratedReactWrapper, mountAndDecorate } from "../test-helpers/enzymeHelpers";
import MaxContainer from "../../src/components/maxes/maxContainer";
import Button from "../../src/components/wrappers/button";
import * as WebClient from "../../src/webClient";
import { responseWithJson } from "../test-helpers/shared";
import { maxesArray } from "../test-helpers/data";

describe("maxContainer", () => {
    let wrapper: IDecoratedReactWrapper;
    const mockGetMaxes = jest.spyOn(WebClient, "getMaxes").mockResolvedValue(responseWithJson(maxesArray));

    beforeEach(() => {
        wrapper = mountAndDecorate(<MaxContainer />);

        mockGetMaxes.mockClear();
    });

    it("Renders GetMaxes button", () => {
        expect(wrapper.find(Button).text()).toBe("GetMaxes");
    });

    it("Calls webclient.getMaxes on 'GetMaxes' click", () => {
        wrapper.find(Button).simulate("click");
        expect(mockGetMaxes).toBeCalled();
    });

    it("Puts webclient.getMaxes response in state", () => {
        wrapper.find(Button).simulate("click");
        expect(wrapper.state().maxes).toBe(maxesArray);
        
    });
});
