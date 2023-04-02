import React, { Component } from "react";
import { GlobalStyle } from "../../../global/globalStyle";
import { Main} from "./style";

export class Login extends Component {
    render() {
        return (
            <Main>
                <GlobalStyle />
                <h1>Page Login</h1>
            </Main>
        );
    }
}