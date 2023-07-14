import {styled} from "styled-components"


export const StyledLi = styled.li`
list-style-type: none;

width: 100%;
height: 334px;
background-color: var(--color-black);
cursor: pointer;


img{
    width:100%;
    height: 65.27%;
    border-radius: 25px;
    background-color: var(--color-black);
    
}
section{
    display: flex;
    margin-top: 4%;
    width: 98%;
    justify-content: space-between;
    
}

`

export const StyledType = styled.p`
display: flex;
justify-content: center;
align-items: center;
width: 114px;
font-size: 17px;
line-height: 25.5;
height: 43px;
background-color: var(--color-yellow);
color: var(--color-black);
border-radius: 255px;
font-family: var( --font-poppins);
`
export const StyledTime = styled.p`
display: flex;
justify-content: center;
align-items: center;
color: var(--color-white);
opacity: 50%;
font-family: var( --font-inter);
font-size: 18px;
`
export const StyledName = styled.p`

display: flex;
justify-content: center;
align-items: center;
margin-left: 1.2px;
color: var(--color-white);

font-family: var( --font-poppins);
`
export const StyledNote = styled.p`
display: flex;
justify-content: center;
font-size: 21px;
gap: 2px;
align-items: center;
color: var(--color-white);

font-family: var( --font-poppins);

`