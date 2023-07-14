import styled from "styled-components";

interface IStyledMovieDiv {
    img: string | undefined;
}

export const MainInternal = styled.main`
    min-height: calc(100vh - 150px);   
        header{
            padding: 1.5rem 9%;
            height: auto;
            justify-content: space-between;

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

export const StyledMovieDiv = styled.div<IStyledMovieDiv>`

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
    url(${(props) => props.img}), lightgray 50%;
    background-position-x: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 120%;

    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: Clamp(20rem, 34vw, 38rem);

    > div {
        padding: 0 1rem;
        
    }

    @media screen and (min-width: 764px) {
        > div {
            padding: 0 9%;
        }
    }
`

export const StyledDescriptionText= styled.div`
    margin: 3rem 0 6rem 0;
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: center;
    
    p {
        max-width: 1200px;
        padding-right: 15%;

        /* max-width: Clamp(0px, 70vw, 900px); */
    }

    @media screen and (min-width: 764px) {
        padding: 0 9%;
    }
`

export const StyledSectionAval= styled.section`
    padding: 0 1rem 4.5rem 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 0 5rem 0;
    }


    @media screen and (min-width: 764px) {
        padding: 0 9% 4.5rem 9%;
    }
`

export const StyledUserAval= styled.div`
    padding: 4rem 2.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    > p {
        width: 70%;
    }
    
    > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-right: 1rem;
            p {
                font-weight: 700;
            }
        }
    }


    @media screen and (min-width: 764px) {
        /* padding: 0 9% 4.5rem 9%; */
    }
`

export const StyledOthersAval= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;

    @media screen and (min-width: 764px) {
        /* padding: 0 9% 4.5rem 9%; */
    }
`