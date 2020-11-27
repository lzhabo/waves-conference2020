import styled from "@emotion/styled";
import React from "react";

interface IProps {
  text: string;
  num: number;
  isReverse: boolean;
}

const Root = styled.div`
  display: flex;
  align-items: baseline;
`;
const Text = styled.div`
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 42px;

  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
`;
const Num = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;

  letter-spacing: -0.01em;

  color: #ffffff;
  padding: 16px;
`;

const MenuTitle: React.FC<IProps> = ({ num, text }) => {
  return (
    <Root>
      <Num>(0{num})</Num>
      <Text>{text}</Text>
    </Root>
  );
};
export default MenuTitle;
