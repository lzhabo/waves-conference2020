import styled from "@emotion/styled";
import React from "react";
import menu from "../assets/menu.svg";
import logo from "../assets/we-logo.svg";
import Subtitle from "../components/Subtitle";
interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
`;

const Header: React.FC<IProps> = () => {
  return (
    <Root>
      <div style={{ position: "relative" }}>
        <Subtitle
          style={{
            textTransform: "uppercase",
            position: "absolute",
            cursor: "pointer",
            marginTop: -12,
          }}
        >
          Зарегистрироваться
        </Subtitle>
      </div>
      <img src={logo} alt="logo" />
      <img
        src={menu}
        alt="logo"
        style={{ cursor: "pointer" }}
        onClick={() => alert("submit")}
      />
    </Root>
  );
};
export default Header;
