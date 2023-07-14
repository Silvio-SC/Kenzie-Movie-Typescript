import { styled } from "styled-components";


export const StyleBig = styled.button`


width:100%;
height:67px;
background-color: var(--color-yellow);
color: var(--color-black);
border:none;
border-radius:255px;
cursor:pointer;
font-weight: 700;
&:hover{
    background-color:var(--color-black);
    color:  var(--color-yellow);}
`

export const StyleSmall = styled.button`


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
`

export const StyleAvarage = styled.button`


width:194px;
height:67px;
background-color: var(--color-yellow);
color: var(--color-black);
border:none;
border-radius:255px;
font-weight: 700;
cursor:pointer;

&:hover{
    background-color:var(--color-black);
    color:var(--color-yellow);
}
`
export const StyledButtonSair = styled.button`

    font-size: 1.0625rem;
    font-weight: 700;
    color: var(--color-white);
    font-family: var(--font-poppins);

    &:hover {
        filter: brightness(120%);
    }
`
