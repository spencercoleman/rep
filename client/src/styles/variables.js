import { css } from 'styled-components/macro';
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

const variables = css`
    :root {
        --black: #212121;
        --blue: #005FDB;
        --darkgrey: #312f36;
        --green: #00855B;
        --lightgrey: #f8f8f8;
        --darkred: #9A3737;
        --lightred: #ebd3d3;
        --red: #BD4747;
        --white: #fff;

        --font-sans: 'Lato', sans-serif;
        
        --font-size-xxxl: 3.05rem;
        --font-size-xxl: 2.44rem;
        --font-size-xl: 1.95rem;
        --font-size-lg: 1.56rem;
        --font-size-md: 1.1rem;
        --font-size-base: 16px;
        --font-size-sm: 0.8rem;
        --font-size-xs: 0.64rem;
        --font-size-xxs: 0.512rem;
        
        --spacing-xxxl: 72px;
        --spacing-xxl: 64px;
        --spacing-xl: 32px;
        --spacing-lg: 24px;
        --spacing-md: 16px;
        --spacing-sm: 12px;
        --spacing-xs: 8px;
        --spacing-xxs: 4px;
        
        --border-radius-subtle: 4px;
        --border-radius-pill: 30px;
        
        --site-max-width: 1100px;
    }
`;

export default variables;