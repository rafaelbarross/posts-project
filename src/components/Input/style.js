import styled from "styled-components";

export const Input = styled.input`
  /* padding: 0.5em; */
  padding: 0px 10px 0px 40px;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;
  height: 3em;
  font-size: 1em; 
  font-family: 'Impact';
  border-radius: 50px;

  @media (max-width: 767px) {
    font-size: 0.8em; 
  }
`;