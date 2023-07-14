import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-black: #000000;
        --color-white: #FFFFFF;
        --color-lightgray-1: #3D3D3D;
        --color-lightgray-2: #171717;
        --color-yellow: #FFBB38;
        
        --font-inter: "Inter", sans-serif;
        --font-poppins: 'Poppins', sans-serif;
    }

    body {
        font-family: var(--font-poppins);
        line-height: 150%;
        background-color: var(--color-black);
        max-width: 100vw;
        min-height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
        font: inherit;
        box-sizing: border-box;
    }

    ol, ul {
        list-style: none;
    }
    button, input {
        cursor: pointer;
        border: none;
        background: transparent;
        outline: none;
        font-family: var(--font-poppins);
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`