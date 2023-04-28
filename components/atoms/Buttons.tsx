import styled from "@emotion/styled";

interface IPrimaryButton {
    blue?: boolean
}

export const PrimaryButton = styled.button<IPrimaryButton>`
    display: inline-block;
    padding: 1.6rem 6.3rem;
    border-radius: 4.1rem;
    background: linear-gradient(359.31deg, #6D5BFF 33.13%, #A89DFF 111.52%);
    box-shadow: 0px -6px 10px #FFFFFF, 0px 6px 4px #D4D4D4;
    border: none;
    cursor: pointer;

    font-weight: 600;
    font-size: 1.71661rem;
    color: #FFFFFF;
`