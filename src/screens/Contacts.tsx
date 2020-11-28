import styled from "@emotion/styled";
import React from "react";
import Divider from "../components/Divider";
import Circle from "../components/Circle";

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

  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #ffffff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  font-size: 48px;
  line-height: 58px;
  padding: 0 0 56px;
  @media (min-width: 1440px) {
    font-size: 56px;
    line-height: 66px;
    padding: 23px 33px 56px 100px;
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

  padding-bottom: 56px;
  @media (min-width: 1440px) {
    padding: 0;
    max-width: 360px;
  }
`;
const Phones = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;
  align-items: center;
  padding: 56px 0;
  @media (min-width: 1440px) {
    padding: 56px;
    flex-direction: row;
  }
`;
const Addresses = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
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
