import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        overflow-x: hidden;
        font-family: 'Fira Code', monospace;
        background-color: #282C33;
        @media screen and (max-width: 768px) {
            overflow-y: ${(props) => (props.toggle ? "hidden" : "")};
        }
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        cursor: pointer;
        border: none;
        outline: none;
    }
    body::-webkit-scrollbar {
        width: 5px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: none;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: rgb(255, 193, 5);    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`;
export default GlobalStyles;
