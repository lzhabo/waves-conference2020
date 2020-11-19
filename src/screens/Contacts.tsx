import styled from "@emotion/styled";
import React from "react";
import Devider from "../components/Devider";
import { FlexContainer } from "../components/FlexContaner";
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
  font-size: 56px;
  line-height: 66px;

  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
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
`;

const Contacts: React.FC<IProps> = () => {
  return (
    <Root>
      <Devider num={4} description={"будем на связи"} />
      <Title>Контакты</Title>
      <FlexContainer justifyContent={"space-between"}>
        <Circle text={"Напиши привет"} />
        <FlexContainer justifyContent={"space-between"}>
          <SubtitleUpper>
            Москва
            <br />
            Тверская улица, 9 Москва, Россия, 125009 <br />
            (999) 123-4567
            <br />
            hello@we.org
          </SubtitleUpper>
          <SubtitleUpper>
            Тула <br />
            Октябрьская улица, 24 Тула, Россия, 300002 <br />
            (999) 123-4567
          </SubtitleUpper>
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default Contacts;
