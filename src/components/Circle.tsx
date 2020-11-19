import styled from "@emotion/styled";
import React from "react";
import Subtitle from "./Subtitle";

interface IProps {
  text: string;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #00a575;
  width: 200px;
  height: 200px;
`;

const Circle: React.FC<IProps> = ({ text }) => {
  return (
    <Root>
      <Subtitle style={{ textTransform: "uppercase" }}>{text}</Subtitle>
    </Root>
  );
};
export default Circle;
