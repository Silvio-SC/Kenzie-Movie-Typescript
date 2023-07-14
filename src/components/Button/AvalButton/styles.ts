import { styled } from "styled-components";
import StarHover from "../../../assets/Star.svg"
import Star from "../../../assets/Vector.png"

export const StylesAvalButton = styled.button`
    display: flex;
    justify-content: end;
    padding: 0.75rem 1.75rem;
    border: none; 
    border-radius: 255px;
    color: var(--color-black);
    background-color: var(--color-yellow);
    font-weight: 700;
    &:hover{
        filter: grayscale(30%)
    }

    width: 170px;
    height: 54px;
    border: none; 
    border-radius: 255px;
    color: var(--color-black);
    background-color: var(--color-yellow);
    background-image: url(${Star});
    background-repeat: no-repeat;
    background-position: center left 30px;
    padding-left: 30px;

    &:hover {
        color: var(--color-yellow);
        background-color: var(--color-black);
        background-image: url(${StarHover});
    }

    display: flex;
    align-items: center;
    gap: 0.75rem;
`