import React from "react";
import {Button as MUIButton} from "@material-ui/core";

type VariantOptions =
    "contained" |
    "outlined" |
    "text";

type SizeOptions =
    "small" |
    "medium" |
    "large";

interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
    label: string;
    variant?: VariantOptions;
    size?: SizeOptions;
}

export default class Button extends React.Component<IButtonProps> {
    public constructor(props: IButtonProps) {
        super(props);
    }

    public render() {
        const {variant, size, label} = this.props;
        return (
            <MUIButton onClick={this.props.onClick} variant={variant} size={size}>{label}</MUIButton>
        );
    }
}
