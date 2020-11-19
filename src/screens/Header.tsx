/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import menu from "../assets/menu.svg";
import logo from "../assets/we-logo.svg";
import Title from "../components/Title";
interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
`;
const SmallMenu = css`
  cursor: pointer;
  padding-right: 25px;
  @media (max-width: 360px) {
    display: none;
  } ;
`;

const Header: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>Зарегистрироваться</Title>
      <img src={logo} alt="logo" />
      <img src={menu} alt="logo" />
    </Root>
  );
};
export default Header;
