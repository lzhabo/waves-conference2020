import styled from "@emotion/styled";
import React from "react";
import Devider from "../components/Devider";
import Title from "../components/Title";
import { FlexContainer } from "../components/FlexContaner";
import Circle from "../components/Circle";
import Subtitle from "../components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contacts: React.FC<IProps> = () => {
  return (
    <Root>
      <Devider num={4} description={"будем на связи"} />
      <Title>Контакты</Title>
      <FlexContainer>
        <Circle text={"Напиши привет"} />
        <FlexContainer justifyContent={"space-between"}>
          <Subtitle>
            Москва
            <br />
            Тверская улица, 9 Москва, Россия, 125009 (999) 123-4567
            <br />
            hello@we.org
          </Subtitle>
          <Subtitle>
            Тула <br />
            Октябрьская улица, 24 Тула, Россия, 300002 (999) 123-4567
          </Subtitle>
        </FlexContainer>
      </FlexContainer>
    </Root>
  );
};
export default Contacts;
