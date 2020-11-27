import styled from "@emotion/styled";
import React from "react";
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
  justify-content: space-around;
  padding: 56px 100px;
  width: 100%;
  @media (max-width: 360px) {
    flex-direction: column;
    padding: 56px 0;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 660px;
  flex: 3;
`;
const Time = styled.div`
  display: flex;
  flex: 2;
  @media (max-width: 360px) {
    padding-bottom: 56px;
  }
`;
const Event: React.FC<IProps> = ({ time, title, subtitle }) => {
  return (
    <Root>
      <Time>
        <Subtitle color={"#00A575"}>{time}</Subtitle>
      </Time>
      <Description>
        <Title style={{ paddingBottom: subtitle.length > 0 ? "32px" : "" }}>
          {title}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
      </Description>
    </Root>
  );
};
export default Event;
