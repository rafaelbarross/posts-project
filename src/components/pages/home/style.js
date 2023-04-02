import styled from "styled-components";

export const Header = styled.header`
  /* height: 70px; */
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  padding: 20px 30px 20px 30px;
  gap: 25px;
  align-items: center;

  svg{
    font-size: 1.5em;
    position: absolute;
    margin-left: 15px;
    color: palevioletred;
  }

  @media (max-width: 767px) {
    padding: 10px 15px;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionNav = styled.nav`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  height: 3em;
  gap: 5px;
`;

export const ButtonRegister = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-family: Helvetica, sans-serif;
  transition: all 0.2s;
  padding: 5px 40px;
  border-radius: 100px;
  background: palevioletred;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 3em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
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

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 5px 15px 5px 15px;
    height: 2.5em;
  }
`;

export const Container = styled.section`
  min-height: 100vh;
  padding: 30px;
`;

export const SearchContainer = styled.section`
  position: relative;
  top: 0;
  width: 100%;
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  min-height: 100px;
  display: flex;
  align-items: flex-end;
`;

export const SectionRegister = styled.section`
  height: 3em;
  display: flex;
  align-items: center;
`;

export const SectionLogin = styled.section`
  height: 3em;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  font-family: Helvetica, sans-serif;
  padding: 10px;

  h1{
    color: black;
    cursor: pointer;
  }
`

export const NoPosts = styled.h1`
  color: rebeccapurple;
  font-family: 'Arial';
  font-style: normal;
`