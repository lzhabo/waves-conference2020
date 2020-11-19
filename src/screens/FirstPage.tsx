import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "../components/FlexContaner";
import Subtitle from "../components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 88px;
  line-height: 98px;

  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
  @media (min-width: 360px) {
    font-size: 28px;
    line-height: 38px;
  }
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
