import styled from "@emotion/styled";
import React, { useState } from "react";
import menu from "../assets/menu.svg";
import logo from "../assets/we-logo.svg";
import GreenMenu from "../components/GreenMenu";

interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
`;

const Register = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;

  letter-spacing: -0.01em;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
  @media (max-width: 360px) {
    display: none;
  }
`;
const Header: React.FC<IProps> = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Root>
      <Register>Зарегистрироваться</Register>
      <img src={logo} alt="logo" />
      <img
        src={menu}
        alt="menu"
        style={{ cursor: "pointer" }}
        onClick={() => setOpened(true)}
      />
        { opened && <GreenMenu onClose={() => setOpened(false)}/>}
    </Root>
  );
};
export default Header;
