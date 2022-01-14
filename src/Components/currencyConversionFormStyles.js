import styled from 'styled-components';

export const Input = styled.input`
    padding: 0.5em 1em;
    border: 1px solid #ccc7d6;
    border-radius: 0.25rem;
    color: #332c3e;
    background: #ffffff;
    font-size: 0.8rem;

    :focus,
    :hover {
        outline: none;
        border: 1px solid #9c8bb9;
    }
`;

export const Select = styled.select`
    padding: 0.5em 1em;
    border: 1px solid #ccc7d6;
    border-radius: 0.25rem;
    color: #332c3e;
    font-size: 0.8rem;
    background: #ffffff;

    :focus,
    :hover {
        outline: none;
        border: 1px solid #9c8bb9;
    }
`;

export const Label = styled.label`
    color: #3f384c;
    font-size: 0.8rem;
    padding-bottom: 0.5em;

    display: none;

    @media all and (min-width: 500px) {
        display: block;
    }
`;

export const Button = styled.button`
    min-width: 4em;
    height: 2.4em;
    border-radius: 0.25em;
    background: #8a45ff;
    color: #ffffff;
    box-shadow: none;
    border-color: transparent;
    padding: 0px 1.25em;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover:not([disabled]) {
        background: #7a2bff;
        cursor: pointer;
    }

    :disabled {
        filter: grayscale(100%);
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
export const Result = styled.div`
    color: #8a45ff;
    margin-top: auto;
    font-size: 1.8rem;
`;

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    padding-bottom: 0em;
`;

export const ValueField = styled.div`
    @media all and (min-width: 500px) {
        flex-basis: 20%;
        flex-grow: 1;
    }
`;

export const SelectField = styled.div`
    @media all and (min-width: 500px) {
        flex-basis: 20%;
        flex-grow: 1;
    }
`;

export const ResultField = styled.div`
    @media all and (min-width: 500px) {
        flex-basis: 40%;
        flex-grow: 2;
    }
`;

export const SubmitField = styled.div`
    margin-top: auto;

    @media all and (min-width: 500px) {
        flex-basis: 20%;
        flex-grow: 1;
    }
`;

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    @media all and (min-width: 500px) {
        flex-direction: row;
    }
`;
