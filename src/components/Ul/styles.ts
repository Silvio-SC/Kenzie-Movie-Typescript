import {styled} from "styled-components"


export const StylesUl = styled.ul`

display: flex;
flex-direction: column;
width: 80%;
margin: 1% 0 20px 9%;

div{
    margin: 5% 0 5% 0;
    display: flex;
    gap: 50px;
}
@media (max-width: 800px) {
width: 90%;
margin: 3% 20% 0 5%;

div{
    margin: 14% 0 15% 0;
    flex-direction: column;
}

}
    
`




