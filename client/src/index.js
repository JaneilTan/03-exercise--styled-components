import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${(props) => props.$fontFamily || "Helvetica Neue"};
    }
`
ReactDOM.render(
    <React.Fragment>
      <GlobalStyle $fontFamily="Fredoka One" /> 
      <App />
    </React.Fragment>,
    document.getElementById("root")
  );
