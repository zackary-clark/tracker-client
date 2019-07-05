import React from "react";
import MaterialTable from "material-table";

interface ITableProps extends React.HTMLAttributes<HTMLElement> {
    columns: IColumn[];
    data: any[];
    title?: string;
}

interface IColumn {
    title: string;
    field: string;
    type?: ColTypeOptions;
    lookup?: object;
}

type ColTypeOptions =
    "boolean" |
    "numeric" |
    "date" |
    "datetime" |
    "time" |
    "currency";

export default class Table extends React.Component<ITableProps> {
    public constructor(props: ITableProps) {
        super(props);
    }

    public render() {
        return (
            <MaterialTable
                title={this.props.title}
                columns={this.props.columns}
                data={this.props.data}
            />
        );
    }
}
