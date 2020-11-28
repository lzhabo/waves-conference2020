import styled from "@emotion/styled";
import React from "react";
import Title from "../components/Title";
import money from "../assets/money.svg";
import man from "../assets/man.svg";
import Divider from "../components/Divider";
import { FlexContainer } from "../components/FlexContaner";

interface IProps {}

const Root = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 160px 0;
  } ;
`;
const Subtitle = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.8);
  padding: 72px 0;
`;
const Img = styled.img`
  @media (min-width: 1440px) {
    width: 460px;
    height: 720px;
  }
`;
const Img2 = styled.img`
  margin-left: -16px;

  @media (min-width: 1440px) {
    width: 360px;
    height: 560px;
    margin: 0;
  } ;
`;

const Agenda: React.FC<IProps> = () => {
  return (
    <Root>
      <FlexContainer flexDirection={"column"}>
        <Divider num={1} description={"повестка"} />
        <Img src={man} alt="man" />
        <Subtitle>
          Самоопределение блокчейн-технологии после <br /> принятия закона о ЦФА
        </Subtitle>
      </FlexContainer>
      <FlexContainer flexDirection={"column"}>
        <Title>
          В этом году темы конференции <br />
          будут посвящены применению <br /> блокчейн-технологий в новых реалиях
        </Title>
        <Subtitle>
          Преодоление кризиса с помощью <br />
          технологических use-cases
        </Subtitle>
        <Img2 src={money} alt="money" />
        <Subtitle>Появление цифрового рубля</Subtitle>
      </FlexContainer>
    </Root>
  );
};
export default Agenda;
