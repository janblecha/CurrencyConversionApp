import { IDataResponse } from './types';

export const fetchCurrencies = (): Promise<IDataResponse> =>
    fetch('/denni_kurz.txt')
        .then((response) => response.text())
        .then((data) => parseStringToArrayOfObjects(data));

const parseStringToArrayOfObjects = (data: string): IDataResponse => {
    const [date, headerRow, ...rows] = data.split('\n');
    const [parsedDate] = date.split(' ');
    const headers = headerRow.split('|');
    const parsedData = rows.map((line: string, index: number) =>
        line.split('|').reduce(
            (object: any, value: any, index: number) => ({
                ...object,
                [headers[index]]: value,
            }),
            {}
        )
    );

    return { date: parsedDate, data: parsedData.slice(0, -1) };
};
