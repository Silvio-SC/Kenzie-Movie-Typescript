import styled from "styled-components"

export  const StyledForm  = styled.form`
    width: 88%;
    height: fit-content;
    margin: 5% auto;
    padding: 2rem;

    @media (max-width: 700px) {
        width: 100%;
        margin: 0;
        padding: 2rem 0;
    }
`
export  const StyledDivTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`
export  const StyledDivText  = styled.div`
    margin: 1rem 0;   
`
export  const StyledButtonVoltar = styled.div`
   display: flex;
   align-items: center;

    img{
        cursor: pointer;
    }
`
export  const StyledInputs  = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 1.5rem;
`
export  const StyledButtonCadastro = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1rem;

    @media (max-width: 700px) {
      display: flex;
      justify-content: center;
    }

 `

export const StyledTamanhoInput = styled.div`
    width: 48%;

   @media(max-width: 1160px){
    width: 100%;
   }
`