import styled from "@emotion/styled";
import React from "react";
import Devider from "../components/Devider";
import speaker from "../assets/speaker.svg";
import Speaker from "../components/Speaker";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const speakersData = [
  {
    pic: speaker,
    name: "Имя Фамилия",
    position: "Должность, Компания",
    isReverse: false,
  },
  {
    pic: speaker,
    name: "Имя Фамилия",
    position: "Должность, Компания",
    isReverse: true,
  },
  {
    pic: speaker,
    name: "Имя Фамилия",
    position: "Должность, Компания",
    isReverse: false,
  },
  {
    pic: speaker,
    name: "Имя Фамилия",
    position: "Должность, Компания",
    isReverse: true,
  },
];
const ScrollContainer = styled.div`
  overflow-x: auto;
  display: flex;
  max-width: 100vw;
  & > * {
    margin: 0 10px;
  }
  & > :first-of-type {
    margin-left: 24px;
  }
  & > :last-child {
    margin-right: 24px;
  }
`;
const Speakers: React.FC<IProps> = () => {
  return (
    <Root>
      <Devider num={3} description={"Спикеры"} />
      <ScrollContainer>
        {speakersData.map((speaker, index) => {
          <Speaker {...speaker} key={index} />;
        })}
      </ScrollContainer>
    </Root>
  );
};
export default Speakers;
