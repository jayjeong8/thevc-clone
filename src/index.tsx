import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {QueryClient, QueryClientProvider} from "react-query";

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  *{
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: normal;
    letter-spacing: -1px;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    font-family: Pretendard, sans-serif;
    color: ${(props) => props.theme.white};
    line-height: 1.4;
    background-color: ${(props) => props.theme.black};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const client = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
