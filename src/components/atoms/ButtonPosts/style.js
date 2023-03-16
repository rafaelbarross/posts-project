import styled from "styled-components";

export const Button = styled.button`
  font-family: 'Impact';
  color: black;
  font-size: 1em;
  margin: 2em 0 0;
  padding: 15px 30px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;
  height: 3em;
  background: pink;
 
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background: palevioletred;
    cursor: pointer;
  }
`;