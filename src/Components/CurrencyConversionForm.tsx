import { useEffect, useState } from 'react';
import { IOption } from '../types';
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
    options?: IOption[];
}

export const CurrencyConversionForm = ({ options }: Props) => {
    const [value, setValue] = useState<string>('');
    const [conversionRate, setConversionRate] = useState<string>('');
    const [result, setResult] = useState<string>('0');

    useEffect(() => {
        options && setConversionRate(options[0]?.value);
    }, [options]);

    const convertValue = (): void => {
        const formattedConversionRate: string = conversionRate.replace(
            ',',
            '.'
        );

        const result: string = (
            +value * +formattedConversionRate
        ).toLocaleString('cs-CZ', {
            style: 'currency',
            currency: 'CZK',
        });

        setResult(result);
    };

    const changeConversionRate = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setConversionRate(e.target.value);

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

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
                        onChange={changeConversionRate}
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
