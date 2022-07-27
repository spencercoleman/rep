import { createGlobalStyle } from 'styled-components/macro';
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${variables};

    html {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        color: var(--darkgrey);
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: var(--font-size-base);
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: 900;
    }

    h1 {
        margin-bottom: var(--spacing-md);
        padding-bottom: var(--spacing-sm);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
        margin: 0;
    }

    a, button {
        transition: all 0.3s ease;
        color: inherit;
    }

    a {
        text-decoration: none;

        &:hover, &:focus {
            text-decoration: underline;
        }
    }

    button {
        border: 0;
        cursor: pointer;
        font-family: inherit;
        border-radius: var(--border-radius-pill);
        background-color: rgba(0,0,0,.7);
        font-size: var(--font-size-sm);
        font-weight: 700;
        padding: var(--spacing-xs) var(--spacing-sm);

        &:hover, &:focus {
            outline: 0;
        }
    }

    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    main {
        position: relative;
        flex-grow: 1;
        padding: var(--spacing-lg) var(--spacing-md) var(--spacing-xxl) var(--spacing-md);
        max-width: var(--site-max-width);

        @media (min-width: 768px) {
            padding: var(--spacing-xl) var(--spacing-lg);
            margin: 0 auto;
        }
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
`;

export default GlobalStyle;
