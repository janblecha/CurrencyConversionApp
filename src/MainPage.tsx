import React from 'react';
import { useQuery } from 'react-query';
import {
    Title,
    PageWrapper,
    PageHeader,
    SpinnerWrapper,
    Spinner,
    PageContent,
    ErrorMessageWrapper,
} from './mainPageStyles';

import { fetchCurrencies } from './utils';
import { ICurrency, IDataResponse } from './types';

import { CurrencyConversionForm } from './Components/CurrencyConversionForm';
import { CurrencyTable } from './Components/CurrencyTable';

export const MainPage: React.FC = () => {
    const { isLoading, data, error, isError } = useQuery<IDataResponse, Error>(
        'fetchCurrencies',
        fetchCurrencies
    );

    const options = data?.data?.map((item: ICurrency) => ({
        value: item.kurz,
        label: item.kód,
    }));

    return (
        <PageWrapper>
            <PageHeader>
                <Title> CURRENCY CONVERTER</Title>
            </PageHeader>
            <PageContent>
                {isError && (
                    <ErrorMessageWrapper>
                        Error:{' '}
                        {error?.message || 'Sorry, but something is broken'}
                    </ErrorMessageWrapper>
                )}
                {isLoading && (
                    <SpinnerWrapper>
                        <Spinner />
                    </SpinnerWrapper>
                )}
                {data && (
                    <>
                        <CurrencyConversionForm options={options} />
                        <CurrencyTable data={data.data} date={data.date} />
                    </>
                )}
            </PageContent>
        </PageWrapper>
    );
};
