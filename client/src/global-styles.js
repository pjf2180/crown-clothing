import { createGlobalStyle } from 'styled-components'
export const smWidth = '575px';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 2rem;
        max-width: 768px;
        margin: auto;
        @media screen and (max-width: ${smWidth}){
            padding: 10px;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }

    *{
        box-sizing: border-box;
    }

    
    
`;

export default GlobalStyle;