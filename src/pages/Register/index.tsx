import { Header } from "../../components/Header";
import { FormRegister } from "../../components/FormRegister";
import { Footer } from "../../components/Footer/index";
import { StyledContainer, StyledMain } from "./styled";


export const RegisterPage = () => {

  return (
    <>
    <StyledMain>
      <Header /> 
      <StyledContainer>
        <FormRegister/>
      </StyledContainer>
    </StyledMain>
    <Footer/>  
    </>

  );
};