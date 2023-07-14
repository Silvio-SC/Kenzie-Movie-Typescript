import { Footer } from "../../components/Footer"
import { FormLogin } from "../../components/FormLogin"
import { Header } from "../../components/Header"
import { StyledLoginMain, StyledLoginDiv } from "./styles"

export const LoginPage = () => {

    return (
        <>
            <StyledLoginMain>
                <Header />
                <StyledLoginDiv>
                    <FormLogin />
                </StyledLoginDiv>
            </StyledLoginMain>
            <Footer />
        </>
    )
}