import { ReactNode } from "react"
import { StyledLink } from "./style"

interface ILink{
    to: string;
    children: ReactNode;
    links:string
}

export function CustomLink({to, children, links}: ILink){
    return(
        <StyledLink links={links} to={to}>
            {children}
        </StyledLink>
    )
}