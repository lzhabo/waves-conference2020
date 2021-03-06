import styled from "@emotion/styled";
import React from "react";

interface IProps {
  pic?: string;
  name?: string;
  position?: string;
  isReverse?: boolean;
}

const Root = styled.div`
  display: flex;

  margin: 16px;
  @media (min-width: 1440px) {
    margin: 40px;
  }
`;
const SubtitleUpper = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 34px;

  letter-spacing: -0.01em;
  text-transform: uppercase;
  padding: 4px 0;
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

const Img = styled.img`
  @media (min-width: 1440px) {
    width: 300px;
    height: 400px;
  }
`;
const Speaker: React.FC<IProps> = ({ pic, position, name, isReverse }) => {
  return (
    <Root style={{ flexDirection: isReverse ? "column" : "column-reverse" }}>
      <div style={{ padding: isReverse ? "0 0 32px" : "32px 0" }}>
        <SubtitleUpper>{name}</SubtitleUpper>
        <Sub>{position}</Sub>
      </div>
      <Img src={pic} alt="speaker" />
    </Root>
  );
};
export default Speaker;
