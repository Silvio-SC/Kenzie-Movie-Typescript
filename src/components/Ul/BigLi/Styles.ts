import {styled} from "styled-components"


export const StylesBigLi = styled.li`
list-style-type: none;
width: 100%;
height: 694px;
background-color: var(--color-black);
cursor: pointer;

img{
    width:100%;
    height: 77.22%;
    border: none;
    border-radius: 40px;
    background-color: var(--color-black);
}
section{
    display: flex;
    margin-top: 2.5%;
    width: 98%;
    justify-content: space-between;
    background-color: var(--color-black);
}
@media (max-width: 800px) {

    height: 340px;
    
}
`


export const StyledBigName = styled.p`

display: flex;
justify-content: center;
align-items: center;
margin-left: 1.2px;
color: var(--color-white);
font-size: 44px;
font-family: var( --font-poppins);
@media (max-width: 800px) {

font-size: 17px;

}
`

export const StyledBigType = styled.p`
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
export const StyledBigTime = styled.p`
display: flex;
justify-content: center;
align-items: center;
color: var(--color-white);
opacity: 50%;
font-family: var( --font-inter);
font-size: 18px;
`

export const StyledBigNote = styled.p`
display: flex;
justify-content: center;
align-items: center;
font-size: 21px;
gap: 2px;
color: var(--color-white);

font-family: var( --font-poppins);

`