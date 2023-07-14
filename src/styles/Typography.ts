import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const base = css`
    font-weight: 700;
    color: var(--color-white);
    font-family: var(--font-poppins);
`

export const Title1 = styled.h1`
    ${base}
    font-size: clamp(21px, 6vw, 44px);
`

export const Title3 = styled.h3`
    ${base}
    font-size: 1.625rem;
`
export const Paragraph = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--color-white);
    font-family: var(--font-inter);
`
export const StyledMenuItem = styled.li`
    ${base}
    font-size: 1rem;
`

export const StyledLink = styled(Link)`
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-yellow);
    font-family: var(--font-poppins);

    &:hover {
        filter: brightness(120%);
    }
`

export const Text1 = styled.p`
    font-family: var(--font-inter);
    font-size: 18px;
    font-size: clamp(8px, 2vw, 18px);
    font-weight: 400;
    color: var(--color-white);
`