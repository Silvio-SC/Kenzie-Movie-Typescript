import {StyledButtonSair} from "../styles"
import { ReactNode } from "react"

interface IButton{
  onClick: any;
  children: ReactNode;
}

export const Button = ({ onClick, children }: IButton) => (
  <StyledButtonSair onClick={onClick}>
    {children}
  </StyledButtonSair>
);