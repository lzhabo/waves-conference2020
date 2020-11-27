import styled from "@emotion/styled";
import React, { useState } from "react";
import Header from "../Header";
import Banner from "../../components/Banner";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Header />
      <Banner />
    </Root>
  );
};
export default FirstPage;
