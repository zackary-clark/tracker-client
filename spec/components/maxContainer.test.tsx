import * as React from "react";
import { IDecoratedReactWrapper, mountAndDecorate } from "../test-helpers/enzymeHelpers";
import MaxContainer from "../../src/components/maxes/maxContainer";
import Button from "../../src/components/muiWrapper/button";
import * as WebClient from "../../src/webClient";

const mockGetMaxes = jest.spyOn(WebClient, "getMaxes");

describe("maxContainer", () => {
    let wrapper: IDecoratedReactWrapper;

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
});
