import React, { Component } from "react";
import { GlobalStyle } from "../../../global/globalStyle";
import { Main} from "./style";

export class Register extends Component {
    render() {
        return (
            <Main>
                <GlobalStyle />
                <h1>Page Register</h1>
            </Main>
        );
    }
}