import styled from 'styled-components';

export const PageWrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
`;

export const PageHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    min-height: 3em;
    background-color: #ffffff;
`;

export const Title = styled.h1`
    font-size: 1rem;
    color: #332c3e;
`;

export const PageContent = styled.div`
    margin-top: 1em;
`;

export const SpinnerWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    z-index: 9999;
`;

export const Spinner = styled.div`
    width: 4em;
    height: 4em;
    border: 3px solid #8a45ff;
    border-radius: 50%;
    border-top-color: #ffffff;
    animation: 1s spin infinite ease-in-out;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
