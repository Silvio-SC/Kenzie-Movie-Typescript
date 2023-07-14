import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IStyledLink{
  links: string,
}

export const StyledLink = styled(Link)<IStyledLink>`
  ${({ links }) => {
    if (links === "cadastre-se") {
      return css`
      display: flex;
      justify-content: center;
      align-items: center;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.0625rem;
        width: 8rem;
        height: 1.625rem;
        color: white;   //Adicionar var()
        border-radius: 0.5rem;
      `;
    } else if (links === "entrar") {
      return css`
      display: flex;
      align-items: center;
      justify-content: center;
        width:114px;
        height:43px;
        background-color:var(--color-yellow);
        color: var(--color-black);
        border:none;
        cursor:pointer;
        border-radius:255px;
        font-weight: 700;
        &:hover{
            background-color:var(--color-black);
            color:  var(--color-yellow);}

            @media (max-width: 700px) {
              width: clamp(90px, 20vw, 114px);
            }
      `
    }else if (links === "voltar") {
      return css`
        font-size: 1rem;
          font-weight: 700;
          color: var(--color-yellow);
          font-family: var(--font-poppins);

          &:hover {
              filter: brightness(120%);
          }
      `
    }
  }}
`;