import Logo from "../../assets/kenziemovie.png"
import Elipse from "../../assets/Ellipse.png"
import { CustomLink } from "../../CustomLink/index"
import { StyledHeader, StyledNav, StyledDiv } from "./style"
import { ContextApi } from "../../providers"
import { useContext } from "react"
import { Button } from "../Button/ExitButton/indexM"

export const Header = () =>{
    return(
        <StyledHeader>
            <img src={Logo} alt="A logo é a palavra kenziemovie com a cor branca " />
            <StyledNav>
                <CustomLink links="cadastre-se" to="/register">Cadastre-se</CustomLink>
                <CustomLink links="entrar" to="/login">Entrar</CustomLink>
            </StyledNav>
        </StyledHeader>
    )
}

export const HeaderInternal = () =>{

    const { logOut, user } = useContext(ContextApi)

    return(
        <StyledHeader>
            <img src={Logo} alt="A logo é a palavra kenziemovie com a cor branca " />
            <StyledNav>
                <StyledDiv>
                    <h3>{user?.name[0].toUpperCase()}</h3>
                    <img src={Elipse} alt="circulo cor amarela"/>
                    <p>{user?.name}</p>
                </StyledDiv> 
                <Button onClick={logOut} >Sair</Button>
            </StyledNav>
        </StyledHeader>
    )
}