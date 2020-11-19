import styled from "@emotion/styled";
import React from "react";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import money from "../assets/money.svg";
import man from "../assets/man.svg";
import Devider from "../components/Devider";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
`;

const Agenda: React.FC<IProps> = () => {
  return (
    <Root>
      <Devider num={1} description={"повестка"} />
      <img src={money} alt="moneyPic" />
      <img src={man} alt="man" />
      <Title>
        ключевыЕ эксперты, разрабатывающие решения на базе блокчейна
      </Title>
      <Title>
        представители бизнеса и власти, участвующие в цифровой трансформации
        компаний
      </Title>
    </Root>
  );
};
export default Agenda;
