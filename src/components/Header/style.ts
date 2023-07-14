import styled from "styled-components"

export  const StyledHeader  = styled.header`
    width: 100%;
    height: 80px;
    padding-top: 2rem;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: row;
    margin: 2% 0 2% 0 ;
    justify-content: space-between;
    align-items: center;
    padding: 0 11.574% 0 11.574%;


    img{
        width: 135.61px;
        height: 16.99px;
        @media (max-width: 700px) {
            width: clamp(108px, 20vw, 135.61px);
            height: clamp(14px, 2vw, 16.99px);
        }
    }

`

export  const StyledNav  = styled.nav`
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 17.6062rem;
  
    @media (max-width: 700px) {
        justify-content: end;
        width:8rem;
        a:first-child {
            display: none;
        }
  }
    
`

export  const StyledDiv  = styled.div`
   display: flex;
    flex-direction: row;
    align-items: center;
    width:95%;

    img{
        width: 43px;
        height: 43px;
        margin-right: 1rem;
        position: relative;
    }

    p{
        font-weight: 400;
        font-size: 1.0625rem;
        width: 100%;
        height: 1.625rem;
        color: var(--color-white);   
    }

    h3{
        font-family: var(--font-poppins);
        font-weight: 700;
        font-size: 1.0625rem;
        color: var(--color-white);
        position: absolute;
        z-index: 1;
        margin-left: 1rem;
    }
 
    @media (max-width: 764px) {
        display: none;
    }
`


