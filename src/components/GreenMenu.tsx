import styled from "@emotion/styled";
import React from "react";
import close from "../assets/close.svg";
import { FlexContainer } from "./FlexContaner";
import MenuTitle from "./MenuTitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #00a575;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CloseBtn = styled.img`
  position: absolute;
  right: 0;
  padding: 21px;
`;
const menuData = [
  {
    text: "повестка",
    num: 1,
    isReverse: true,
  },
  {
    text: "расписание",
    num: 2,
    isReverse: false,
  },
  {
    text: "спикеры",
    num: 3,
    isReverse: true,
  },
  {
    text: "контакты",
    num: 4,
    isReverse: false,
  },
];
const GreenMenu: React.FC<IProps> = () => {
  return (
    <Root>
      <CloseBtn src={close} />
      <FlexContainer flexDirection="column" style={{ textAlign: "right" }}>
        {menuData.map((menu, index) => (
          <MenuTitle {...menu} key={index} />
        ))}
      </FlexContainer>
    </Root>
  );
};
export default GreenMenu;
