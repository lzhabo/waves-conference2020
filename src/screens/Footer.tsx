import styled from "@emotion/styled";
import React from "react";
import Subtitle from "../components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
`;

const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle>©2020</Subtitle>
      <Subtitle
        onClick={() => window.scrollTo(0, 0)}
        style={{ cursor: "pointer" }}
      >
        (BACK TO TOP)
      </Subtitle>
      <Subtitle>ALL RIGHTS RESERVED</Subtitle>
    </Root>
  );
};
export default Footer;
