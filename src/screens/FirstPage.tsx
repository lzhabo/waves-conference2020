import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "../components/FlexContaner";
import Subtitle from "../components/Subtitle";
import graphic from "../assets/graphic.svg";
import SizedBox from "../components/SizedBox";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  padding: 56px 0;
  background: url(${graphic}) center no-repeat;
  min-height: 811px;
  flex-wrap: nowrap;
  align-content: space-evenly;
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
  }
`;

const FirstPage: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>
        Waves Enterprise <br />
        Conference 2020
      </Title>
      <SizedBox height={452} />
      <FlexContainer justifyContent={"space-between"} alignItems={"center"}>
        <Subtitle>ЛИСТАЙ ВНИЗ</Subtitle>
        <FlexContainer flexDirection={"column"}>
          <Subtitle style={{ textAlign: "right" }}>
            12 ДЕКАБРЯ <br /> <div style={{ color: "#00A575" }}>ONLINE</div>
          </Subtitle>
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default FirstPage;
