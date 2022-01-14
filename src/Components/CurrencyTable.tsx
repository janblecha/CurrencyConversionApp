import { ICurrency } from '../types';
import { Table, TableWrapper, UpdatedDate } from './currencyTableStyles';

interface Props {
    data?: ICurrency[];
    date: string;
}

export const CurrencyTable = ({ data = [], date }: Props) => {
    const tableHeaderItems = Object.keys(data?.[0]);

    return (
        <TableWrapper>
            <UpdatedDate>{`Last Update: ${date}`}</UpdatedDate>
            <Table>
                <thead>
                    <tr>
                        {tableHeaderItems?.map((item) => (
                            <th key={item}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                {Object.values(item).map((value, index) => (
                                    <td
                                        key={index}
                                        data-label={tableHeaderItems[
                                            index
                                        ].toUpperCase()}>
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </TableWrapper>
    );
};
