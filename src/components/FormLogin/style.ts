import styled from "styled-components";


export const StyledFormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    padding: 3rem 1rem;
    background-color: rgba(0,0,0,0.3);

    width: clamp(280px, 100%, 600px);

    h1 {
        margin-bottom: 1rem;
    }

    div:nth-child(4) {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 2rem;   
    }

    @media screen and (min-width: 764px){
        padding: 3rem clamp(1rem, 4vw, 4rem);
        margin: 0 1rem;
        width: clamp(400px, 100%, 600px);
    }
`
