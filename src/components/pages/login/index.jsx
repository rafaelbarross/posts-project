import React, { Component } from "react";
import { GlobalStyle } from "../../../global/globalStyle";
import { Main, Form, Header, Inputs, Input, CheckboxContainer, Checkbox, CheckboxText, SignInButton, ForgetPasswordLink, SignUpLink } from "./style";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { isPasswordVisible: false };
    }

    togglePasswordVisibility() {
        var senhaInput = document.getElementById("input-senha");
        const iconeOlho = document.getElementById("togglePassword");
        const { isPasswordVisible } = this.state;

        senhaInput.type = isPasswordVisible ? "password" : "text";
        iconeOlho.textContent = isPasswordVisible ? "visibility" : "visibility_off";
        this.setState({ isPasswordVisible: !isPasswordVisible });
    }

    render() {
        const { isPasswordVisible } = this.state;

        return (
            <Main>
                <GlobalStyle />
                <Form className="form">
                    <Header className="header">Sign In</Header>
                    <Inputs className="inputs">
                        <Input placeholder="Email" className="input" type="text" />
                        <Input placeholder="Password" className="input" type="password" id="input-senha" />
                        {isPasswordVisible ? (
                            <MdOutlineVisibilityOff className="eyes-password" onClick={() => this.togglePasswordVisibility()} id="togglePassword">
                                visibility
                            </MdOutlineVisibilityOff>
                        ) : (
                            <MdOutlineVisibility className="eyes-password" onClick={() => this.togglePasswordVisibility()} id="togglePassword">
                                visibility_off
                            </MdOutlineVisibility>
                        )}
                        <CheckboxContainer className="checkbox-container">
                            <Checkbox type="checkbox" id="checkbox" />
                            <CheckboxText htmlFor="checkbox" className="checkbox-text">
                                Remember me
                            </CheckboxText>
                        </CheckboxContainer>
                        <SignInButton className="sigin-btn">Submit</SignInButton>
                        <ForgetPasswordLink className="forget" href="#">
                            Forget password ?
                        </ForgetPasswordLink>
                        <SignUpLink className="signup-link">
                            Don't have an account? <a href="https://github.com/rafaelbarross">Sign up</a>
                        </SignUpLink>
                    </Inputs>
                </Form>
            </Main>
        );
    }
}
