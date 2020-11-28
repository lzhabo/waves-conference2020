import styled from "@emotion/styled";
import React from "react";
import close from "../assets/close.svg";
import { Column, Row } from "./flex";
import MenuTitle from "./MenuTitle";

interface IProps {
  onClose: () => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #00a575;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  @media (min-width: 1440px) {
    left: 50%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  @media (min-width: 1440px) {
    width: 640px;
  }
`;

const CloseBtn = styled.img`
  position: absolute;
  right: 0;
  padding: 21px;
`;

const GreenMenu: React.FC<IProps> = ({ onClose }) => {
  return (
    <Root>
      <CloseBtn onClick={onClose} src={close} />
      <ContentWrapper>
        <Row>
          <MenuTitle text="повестка" num={1} />
        </Row>
        <Row justifyContent="flex-end">
          <MenuTitle text="расписание" num={2} />
        </Row>
        <Row>
          <MenuTitle text="спикеры" num={3} />
        </Row>
        <Row justifyContent="flex-end">
          <MenuTitle text="контакты" num={4} />
        </Row>
      </ContentWrapper>
    </Root>
  );
};
export default GreenMenu;
