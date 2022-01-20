import { useEffect, useState } from 'react';
import { IOption, ICurrency } from '../types';
import {
    FormWrapper,
    FormItem,
    Label,
    Input,
    Select,
    Result,
    Button,
    ValueField,
    SelectField,
    ResultField,
    SubmitField,
} from './currencyConversionFormStyles';

interface Props {
    data?: ICurrency[];
}

export const CurrencyConversionForm = ({ data }: Props) => {
    const [value, setValue] = useState<string>('');
    const [selectedCurrency, setselectedCurrency] = useState<string>('');
    const [result, setResult] = useState<string>('0');

    const convertValue = () => {
        const selectedConversionItem = data?.find(
            (item) => item.kurz === selectedCurrency
        );

        if (!selectedConversionItem) {
            return;
        }

        const conversionRate =
            +selectedConversionItem?.kurz.replace(',', '.') /
            +selectedConversionItem.množství;

        const result: string = `${(+value / conversionRate)
            .toFixed(2)
            .toString()} ${selectedConversionItem.kód}`;

        setResult(result);
    };

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

    const options = data?.map((item: ICurrency) => ({
        value: item.kurz,
        label: item.kód,
    }));

    return (
        <FormWrapper>
            <ValueField>
                <FormItem>
                    <Label htmlFor="valueInput">CZK</Label>
                    <Input
                        id="valueInput"
                        type="number"
                        pattern="[0-9]+([\.,][0-9]+)?"
                        required
                        step="0.001"
                        min="0"
                        placeholder="Insert amount ..."
                        title="This should be a number"
                        onChange={changeValue}
                        value={value}
                    />
                </FormItem>
            </ValueField>
            <SelectField>
                <FormItem>
                    <Label htmlFor="valueInput">TO</Label>
                    <Select
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setselectedCurrency(e.target.value)
                        }
                        defaultValue={options?.[0].value}>
                        {' '}
                        {options?.map((option: IOption) => (
                            <option key={option.label} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                </FormItem>
            </SelectField>
            <SubmitField>
                <FormItem>
                    <Button
                        disabled={!value}
                        onClick={convertValue}
                        type="submit">
                        {' '}
                        CONVERT
                    </Button>
                </FormItem>
            </SubmitField>
            <ResultField>
                <FormItem>
                    <Label htmlFor="valueInput">RESULT</Label>
                    <Result>{result}</Result>
                </FormItem>
            </ResultField>
        </FormWrapper>
    );
};
