import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "./FlexContaner";
import Title from "./Title";
import Subtitle from "./Subtitle";
import { jsx, css } from "@emotion/core";

interface IProps {
  time: string;
  title: string;
  subtitle: string;
}

const Root = styled.div`
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  padding: 56px 0;
  justify-content: space-around;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 660px;
`;
const Event: React.FC<IProps> = ({ time, title, subtitle }) => {
  return (
    <Root>
      <FlexContainer>
        <Subtitle color={"#00A575"}>{time}</Subtitle>
      </FlexContainer>
      <Description>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Description>
    </Root>
  );
};
export default Event;
