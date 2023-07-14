import styled from "styled-components";
import backgroud from "../../assets/backgroundLoginPage.png"

export const StyledLoginDiv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;

    min-height: calc(100vh - 43px - 150px);

    form {
        grid-column: 1/2;
        margin: 1rem;
    }

    @media screen and (min-width: 764px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;

        margin: 1rem 0 1rem 9%;
    }
`

export const StyledLoginMain = styled.main`
    background-image: url(${backgroud});
    background-repeat: no-repeat;
    background-size: cover;

    min-height: calc(100vh - 150px);

    header{
        padding: 1.5rem 9%;
        height: auto;

        nav{ 
            align-items: center;

            a:nth-child(1) {
                width: auto;
            }
        }
    }

    @media screen and (max-width: 764px){
        header{
            nav{ 
                width: auto;
                a:nth-child(1) {
                    width: auto;
                    display: none;
                }
            }
    }
    }
`

