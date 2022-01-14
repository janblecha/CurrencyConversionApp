import styled from 'styled-components';

export const TableWrapper = styled.div`
    padding: 1em;
    margin-top: 1em;
`;

export const UpdatedDate = styled.div`
    font-size: 0.8rem;
    color: #3f384c;
    margin-bottom: 1em;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        text-transform: uppercase;
    }

    td,
    th {
        padding: 0.8em;
        border: 1px solid #ddd;
        text-align: center;
        font-size: 0.8rem;
        color: #3f384c;
    }

    tbody tr:nth-child(even) {
        background-color: #ffffff;
    }

    @media (max-width: 500px) {
        thead {
            display: none;
        }

        table,
        tbody,
        td,
        tr {
            display: block;
        }

        tr {
            margin-bottom: 1em;
        }

        td {
            text-align: right;
            padding-left: 50%;
            text-align: right;
            position: relative;

            ::before {
                content: attr(data-label);
                position: absolute;
                left: 0;
                widht: 50%;
                padding-left: 1em;
                font-weight: bold;
                text-align: left;
            }
        }
    }
`;
