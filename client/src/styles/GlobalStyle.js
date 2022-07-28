import { createGlobalStyle } from 'styled-components/macro';

import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${variables};

    html {
        box-sizing: border-box;
        font-family: var(--font-sans);
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
        background-color: var(--lightgrey);
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: 900;
    }

    h1 {
        margin-bottom: var(--spacing-md);
        padding-bottom: var(--spacing-sm);
        font-size: 1.75em;
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
        border-radius: var(--border-radius-subtle);
        font-size: var(--font-size-base);
        font-weight: 700;
        padding: var(--spacing-xs) var(--spacing-sm);
        background-color: var(--black);
        color: var(--white);

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
        padding: var(--spacing-lg) var(--spacing-md) var(--spacing-xxxl) var(--spacing-md);
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

    input, select {
        padding: var(--spacing-xs) var(--spacing-sm);
        font-size: var(--font-size-base);
        font-family: var(--font-sans);
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
