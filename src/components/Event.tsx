import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "./FlexContaner";
import Title from "./Title";
import Subtitle from "./Subtitle";

interface IProps {
  time: string;
  title: string;
  subtitle: string;
}

const Root = styled.div`
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
`;

const Event: React.FC<IProps> = ({ time, title, subtitle }) => {
  return (
    <Root>
      <FlexContainer>
        <Subtitle color={"#00A575"}>{time}</Subtitle>
      </FlexContainer>
      <FlexContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </FlexContainer>
    </Root>
  );
};
export default Event;