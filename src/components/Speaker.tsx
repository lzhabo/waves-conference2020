import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "./FlexContaner";

interface IProps {
  pic?: string;
  name?: string;
  position?: string;
  isReverse?: boolean;
}
const Root = styled.div`
  display: flex;
  margin: 40px;
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
`;
const Sub = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;

  letter-spacing: -0.01em;

  color: rgba(255, 255, 255, 0.8);
`;

const Speaker: React.FC<IProps> = ({ pic, position, name, isReverse }) => {
  return (
    <Root style={{ flexDirection: isReverse ? "column" : "column-reverse" }}>
      <Sub style={{ padding: "10px 0" }}>{position}</Sub>
      <SubtitleUpper>{name}</SubtitleUpper>
      <img src={pic} alt="speaker" />
    </Root>
  );
};
export default Speaker;
