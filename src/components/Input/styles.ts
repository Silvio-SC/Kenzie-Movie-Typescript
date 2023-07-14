import { styled } from "styled-components";


export const InputStyle = styled.input`
    width:100%;
    height:70px;
    background-color: var(--color-lightgray-1);
    color: var(--color-white);
    border:none;

    font-weight: 700;
    padding: 1rem 1.25rem;
`

export const DivInputStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 

    p {
        font-size: .75rem;
        color: red;
    }
`

