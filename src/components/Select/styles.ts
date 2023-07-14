import { styled } from 'styled-components';


export const StyledSelect = styled.select`
    width:100%;
    height:70px;
    padding: 0 1rem;
    background-color: var(--color-lightgray-1);
    color:var(--color-white);
    border:none;
`

export const DivSelectStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 

    p {
        font-size: .75rem;
        color: red;
    }
`