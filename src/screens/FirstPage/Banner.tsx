import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "../../components/FlexContaner";
import Subtitle from "../../components/Subtitle";
import graphic from "../../assets/graphic.svg";
import graphic2 from "../../assets/small-graphic.svg";
import SizedBox from "../../components/SizedBox";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  padding: 56px 0;
  background: url(${graphic2}) center no-repeat;

  @media (min-width: 1440px) {
    background: url(${graphic}) center no-repeat;
  }
`;
const Title = styled.div`
  width: 285px;
  height: 76px;
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;

  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
  @media (min-width: 1440px) {
    font-size: 88px;
    line-height: 98px;
    width: 894px;
    height: 196px;
    padding-top: 33px;
  }
`;

const Banner: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>
        Waves Enterprise <br /> Conference 2020
      </Title>
      <SizedBox height={424} />
      <FlexContainer justifyContent={"space-between"} alignItems={"center"}>
        <Subtitle>ЛИСТАЙ ВНИЗ</Subtitle>
        <FlexContainer flexDirection={"column"}>
          <Subtitle style={{ textAlign: "right" }}>
            12 ДЕКАБРЯ <br />
            <div style={{ color: "#00A575" }}>ONLINE</div>
          </Subtitle>
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default Banner;
