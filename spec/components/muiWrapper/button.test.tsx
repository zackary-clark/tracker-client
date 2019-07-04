import React from "react";
import { mountAndDecorate, IDecoratedReactWrapper } from "../../test-helpers/enzymeHelpers";
import Button from "../../../src/components/muiWrapper/button";
import {Button as MUIButton} from "@material-ui/core";

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
    });
    
    it("Passes variant prop through to MUIButton", () => {
        const VariantProp = "contained";

        wrapper = mountAndDecorate(<Button label={"button"} variant={VariantProp} />);

        const MUIVariantProp = wrapper.find(MUIButton).prop("variant");

        expect(MUIVariantProp).toBe(VariantProp);
    });
    
    it("Passes size prop through to MUIButton", () => {
        const SizeProp = "small";

        wrapper = mountAndDecorate(<Button label={"button"} size={SizeProp} />);

        const MUISizeProp = wrapper.find(MUIButton).prop("size");

        expect(MUISizeProp).toBe(SizeProp);
    });
});
