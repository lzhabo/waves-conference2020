import styled from "@emotion/styled";
import React from "react";
import Title from "../components/Title";
import { FlexContainer } from "../components/FlexContaner";
import Subtitle from "../components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>Waves Enterprise Conference 2020</Title>
      <FlexContainer justifyContent={"space-between"}>
        <Subtitle>ЛИСТАЙ ВНИЗ</Subtitle>
        <Subtitle>12 ДЕКАБРЯ ONLINE</Subtitle>
      </FlexContainer>
    </Root>
  );
};
export default FirstPage;
