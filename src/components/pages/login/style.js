import styled from "styled-components";

export const Main = styled.main`
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  background-color: #fff;
  color: rgb(97 97 97);
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.05);
  width: 22rem;
  background-clip: border-box;
  margin: 0 auto;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.25);

  /* center the form horizontally */

  @media only screen and (max-width: 768px) {
    /* adjust for mobile devices */
    &.header {
      font-size: 1.5rem;
      height: auto;
    }

    &.inputs {
      padding: 1rem;
    }

    &.sigin-btn {
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
    }
  }
`;

export const Header = styled.div`
  /* styles para a classe .header */
  position: relative;
  background-clip: border-box;
  background-color: #1e88e5;
  background-image: linear-gradient(to top right, #1e88e5, #42a5f5);
  margin: 10px;
  border-radius: 0.75rem;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
    rgba(33, 150, 243, 0.4);
  height: 7rem;
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.9rem;
  font-family: Roboto, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.div`
  /* styles para a classe .inputs */
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  > svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 241px;
    transform: translateY(-50%);
    right: 35px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  &.input {
    /* styles para a classe .input */
    border: 1px solid rgba(128, 128, 128, 0.61);
    outline: 0;
    color: rgb(69 90 100);
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.25rem;
    padding: 0.75rem;
    background-color: transparent;
    border-radius: 0.375rem;
    /* width: 100%; */
    /* height: 100%; */
  }

  &.input:focus {
    border: 1px solid #1e88e5;
  }
`;

export const PasswordToggle = styled.span`
  /* styles para a classe .material-icons.style-password */
  position: absolute;
  top: 241px;
  transform: translateY(-50%);
  right: 35px;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  /* styles para a classe .checkbox-container */
  gap: 5px;
  display: inline-flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  /* styles para a classe .checkbox */
  position: relative;
  overflow: hidden;
  padding: 0.55rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  height: 20px;
  width: 20px;
`;

export const CheckboxText = styled.label`
  /* styles para a classe .checkbox-text */
  cursor: pointer;
`;

export const SignInButton = styled.button`
  /* styles para a classe .sigin-btn */
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  padding: 0.75rem 1.5rem;
  background-color: #1e88e5;
  background-image: linear-gradient(to top right, #1e88e5, #42a5f5);
  border-radius: 0.5rem;
  width: 100%;
  outline: 0;
  border: 0;
  color: #fff;
`;

export const ForgetPasswordLink = styled.a`
  /* styles para a classe .forget */
  text-align: right;
  font-weight: 600;
`;

export const SignUpLink = styled.p`
  /* styles para a classe .signup-link */
  line-height: 1.5;
  font-weight: 300;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
