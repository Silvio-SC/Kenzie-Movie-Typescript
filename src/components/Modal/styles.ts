import { styled } from "styled-components";


export const StyledModalBackground = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);
`
export const StyledModal = styled.section`

    width: clamp(260px, 100%, 760px);
    margin: 0 2rem;
    border-radius: 5px;
    background-color: var(--color-lightgray-2);


    > button{
        margin: 0 10% 5% 9%;
    }

`

export const StylesModalDiv = styled.div`

display: flex;
margin: 8% 10% 5% 9%;
justify-content: space-between;

    button {
            color: var(--color-white);
            font-size: 34px;
            font-family: 'Poppins', sans-serif;
            opacity: 50%;
            
            margin-top: -15%;
            margin-right: -8%;
    }

`

export const StylesModalAction = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 10% 5% 9%;
    gap: 20px;

    button {
        align-self: flex-start;
    }
` 