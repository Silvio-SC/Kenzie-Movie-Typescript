import { styled } from "styled-components";


export const StyleTex = styled.textarea`
    width:100%;
    height:200px;
    background-color:var(--color-lightgray-1);
    color: var(--color-white);
    border:none;
    padding: 1rem;
`

export const DivTextStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 

    p {
        font-size: .75rem;
        color: red;
    }
`