import { ReactElement } from "react";
import { mount, ReactWrapper } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import React from "react";

export interface IDecoratedReactWrapper extends ReactWrapper {
    findOneElement(selector: string): IDecoratedReactWrapper;
    asyncUpdate(): Promise<IDecoratedReactWrapper>;
}

export const mountInRouter = (node: ReactElement<any>, path?: string): IDecoratedReactWrapper => {
    return mountAndDecorate(
        <MemoryRouter initialEntries={[path ? path : "/"]}>
            {node}
        </MemoryRouter>);
};

export const mountAndDecorate = (node: ReactElement<any>): IDecoratedReactWrapper => {
    return decorateWrapper(mount(node) as IDecoratedReactWrapper);
};

const decorateWrapper = (wrapper: IDecoratedReactWrapper): IDecoratedReactWrapper => {
    wrapper.findOneElement = (selector: string): IDecoratedReactWrapper => {
        const element = wrapper.find(selector);

        if (element.length === 1) {
            return element as IDecoratedReactWrapper;
        } else if (element.length === 0) {
            throw new Error("\tDid not find element with selector:\t\t\t" + selector + "\n");
        } else {
            throw new Error("\tFound more than one element with selector:\t\t\t" + selector + "\n");
        }
    };

    wrapper.asyncUpdate = (): Promise<IDecoratedReactWrapper> => {
        return new Promise((resolve) => setTimeout(resolve, 0))
            .then(() => {
                return wrapper.update();
            });
    };

    return wrapper;
};
