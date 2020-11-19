import styled from "@emotion/styled";
import React from "react";

interface IProps {
  pic?: string;
  name?: string;
  position?: string;
  isReverse?: boolean;
}
const Root = styled.div<IProps>`
  display: flex;
  flex-direction: ${({ isReverse }) => "row-reverse" ?? "row"};
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

const Speaker: React.FC<IProps> = ({ pic, position, name }) => {
  return (
    <Root>
      <SubtitleUpper>{name}</SubtitleUpper>
      <Sub>{position}</Sub>
      <img src={pic} alt="speaker" />
    </Root>
  );
};
export default Speaker;
