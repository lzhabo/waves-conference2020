import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "../components/FlexContaner";
import Subtitle from "../components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  padding: 56px 0;
`;
const Title = styled.div`
  width: 894px;
  height: 196px;
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 88px;
  line-height: 98px;

  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
  @media (max-width: 360px) {
    font-size: 28px;
    line-height: 38px;
    //justify-content: ;
  }
`;

const FirstPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>
        Waves Enterprise <br />
        Conference 2020
      </Title>
      <FlexContainer justifyContent={"space-between"} alignItems={"center"}>
        <Subtitle>ЛИСТАЙ ВНИЗ</Subtitle>
        <FlexContainer flexDirection={"column"}>
          <Subtitle style={{ textAlign: "right" }}>12 ДЕКАБРЯ </Subtitle>
          <Subtitle style={{ textAlign: "left" }} color={"#00A575"}>
            ONLINE
          </Subtitle>
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default FirstPage;
