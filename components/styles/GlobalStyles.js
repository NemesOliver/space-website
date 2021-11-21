import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        position: relative;
        font-family: 'Lora', serif;
        font-weight: 400;
        color: ${({ theme }) => theme.color};
    }

    h1 {
        font-size: 9.375rem;
    }

    h2 {
        font-size: 6.25rem;
    }

    h3 {
        font-size: 3.5rem;
    }

    h4 {
        font-size: 2rem;
    }

    h5 {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 1.75rem;
        letter-spacing: 4.75px;
    }

    p {
        font-family: 'Barlow Condensed', sans-serif;
    }

    .subheading-1 {
        font-size: 1.75rem
    }

    .subheading-2 {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: .875rem;
        letter-spacing: 2.35px;
    }

    .navText {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 1rem;
        letter-spacing: 2.7px;
    }

`;

export default GlobalStyles;
