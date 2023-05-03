import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media screen and (max-width: 1700px){
            /* font-size: 90%; */
        }
    }
    body {
        background: #fbffff;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #f67280;
        background: transparent;
        color: #f67280;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover {
            background-color: #f67280;
            color: #fbffff;
        }
    }
    h2 {
        font-weight: 500;
        font-size: 4rem;
    }
    h3 {
        color: #4a1e2b;
    }
    h4 {
        font-weight: 500;
        color: #f67280;
        font-size: 2rem;
    }
    span {
        font-weight: 500;
        color: #f67280;
    }
    a {
        font-size: 1.1rem;
        color: #4a1e2b;
        text-decoration: none;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 0;
        position: relative;
        white-space: nowrap;
        border: none;
        text-decoration: none !important;
        &::after {
            background-color: #f67280;
            position: absolute;
            bottom: -4px;
            left: 0;
            content: "";
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease 0s;
            width: 100%;
            height: 2px;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
    #logo {
        img {
            width: 5rem;
            height: 5rem;
        }
        font-size: 1.8rem;
        color: #f8b195;
        text-decoration: none !important;
        text-decoration: none;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        &::after {
            background-color: transparent;
        }
        &:hover::after {
            transform: none;
        }
    }
    p {
        padding: 1rem 0rem;
        color: #4a1e2b;
        font-size: 1.4rem;
        line-height: 150%;
    }
    li {
        padding: 0.5rem 0rem;
        color: #4a1e2b;
        font-size: 1.4rem;
    }
    ul {

        padding-left: 50px;

    }
`;

export default GlobalStyles;