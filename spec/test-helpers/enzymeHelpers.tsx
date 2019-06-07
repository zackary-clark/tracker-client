import { ReactElement } from "react";
import { mount, ReactWrapper } from "enzyme";
import { HashRouter } from "react-router-dom";
import React from "react";

export interface IDecoratedReactWrapper extends ReactWrapper {
    findOneElement(selector: string): IDecoratedReactWrapper;
}

export const mountAndDecorate = (node: ReactElement<any>): IDecoratedReactWrapper => {
    return decorateWrapper(mount(<HashRouter>{node}</HashRouter>) as IDecoratedReactWrapper);
};

const decorateWrapper = (wrapper: IDecoratedReactWrapper): IDecoratedReactWrapper => {
    wrapper.findOneElement = (selector: string): IDecoratedReactWrapper => {
        const element = wrapper.find(selector);

        if (element.length === 1) {
            return element as IDecoratedReactWrapper;
        } else if (element.length === 0) {
            throw new Error("\n\tDid not find element with selector:\n\t" + selector + "\n");
        } else {
            throw new Error("\n\tFound more than one element with selector:\n\t" + selector + "\n");
        }
    };

    return wrapper;
};
