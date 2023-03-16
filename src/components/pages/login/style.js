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

// export const CustomizedBody  = styled.body`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   margin: 0;
//   padding: 0;
// `;

export const Button = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-family: Helvetica, sans-serif;
  transition: all 0.2s;
  padding: 10px 20px;
  border-radius: 100px;
  background: palevioletred;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  
  &:hover {
    background: #c4e201;
  }
  
  > svg {
    width: 34px;
    margin-left: 10px;
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover > svg {
    transform: translateX(5px);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
