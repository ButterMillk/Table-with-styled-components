
export interface ColumnDescription{
    id: string;
    name: string;
    width: string;
    hideOnDesktop: boolean;
    hideOnTablet: boolean;
    hideOnPhone: boolean;
}

export interface ICell{
    width?: string;
    pointer?: boolean;
    hideOnDesktop?: boolean;
    hideOnTablet?: boolean;
    hideOnPhone?: boolean;
}

export interface ISingleRow{
    header?: boolean;
}

export interface TableProps{
    columnConfiguration: Array<ColumnDescription>;
    data: Array<any>;
}

export interface TableState{
    data: Array<any>;
}

export type BreakPoints = {
    desktop: number,
    tablet: number,
    phone: number,
}
