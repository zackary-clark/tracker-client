import React from "react";
import { mountAndDecorate, IDecoratedReactWrapper } from "../../test-helpers/enzymeHelpers";
import Button from "../../../src/components/muiWrapper/button";

describe("MUI Button Wrapper", () => {
    let wrapper: IDecoratedReactWrapper;

    it("Renders with label", () => {
        wrapper = mountAndDecorate(<Button className="button-class" label={"button label"} />);
        
        expect(wrapper.findOneElement(".button-class").text()).toBe("button label");
    });
    
    it("Calls onClick when clicked", () => {
        const onClickMock = jest.fn();

        wrapper = mountAndDecorate(<Button label={"button"} onClick={onClickMock} />);
        
        wrapper.simulate("click");

        expect(onClickMock).toBeCalled();
    })
});
