import styled from "@emotion/styled";
import React from "react";
import Subtitle from "../components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle>©2020</Subtitle>
      <Subtitle>(BACK TO TOP)</Subtitle>
      <Subtitle>ALL RIGHTS RESERVED</Subtitle>
    </Root>
  );
};
export default Footer;
