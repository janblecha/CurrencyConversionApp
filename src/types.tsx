export interface ICurrency {
    země: string;
    měna: string;
    množství: string;
    kód: string;
    kurz: string;
}

export interface IOption {
    value: string;
    label: string;
}

export interface IDataResponse {
    date: string;
    data: ICurrency[];
}
