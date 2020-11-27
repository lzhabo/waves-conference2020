import styled from "@emotion/styled";
import React from "react";
import Divider from "../components/Divider";
import { FlexContainer } from "../components/FlexContaner";
import Circle from "../components/Circle";
import { css } from "@emotion/core";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
`;
const Title = styled.div`
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 66px;

  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  padding: 23px 33px 56px 100px;
  @media (min-width: 360px) {
    font-size: 48px;
    line-height: 58px;
    padding: 0 0 56px;
  }
`;
const SubtitleUpper = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;

  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
  max-width: 360px;
  @media (min-width: 360px) {
    padding-bottom: 56px;
  }
`;
const Phones = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 56px;

  @media (min-width: 360px) {
    flex-direction: column-reverse;
    padding: 0;
    align-items: center;
    padding: 56px 0;
  }
`;
const Addresses = styled.div`
  display: flex;
  @media (min-width: 360px) {
    flex-direction: column;
  }
`;
const Contacts: React.FC<IProps> = () => {
  return (
    <Root>
      <Divider num={4} description={"будем на связи"} />
      <Title>Контакты</Title>
      <Phones>
        <Circle text={"Напиши привет"} />
        <Addresses>
          <SubtitleUpper>
            Москва
            <br />
            <br />
            Тверская улица, 9 Москва, Россия, 125009 <br />
            (999) 123-4567
            <br />
            <br />
            hello@we.org
          </SubtitleUpper>
          <SubtitleUpper>
            Тула <br /> <br />
            Октябрьская улица, 24 Тула, Россия, 300002 <br /> <br />
            (999) 123-4567
          </SubtitleUpper>
        </Addresses>
      </Phones>
    </Root>
  );
};
export default Contacts;
