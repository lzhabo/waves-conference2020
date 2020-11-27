import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import Subtitle from "../components/Subtitle";

interface IProps {}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  @media (max-width: 360px) {
    align-items: flex-end;
    padding: 140px 0 56px;
  }
`;
const ScrollUp = styled.div`
  position: absolute;
  cursor: pointer;
  white-space: nowrap;
  top: -10px;
  left: -7px;
  @media (max-width: 360px) {
    top: -100px;
  }
`;
const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Subtitle>©2020</Subtitle>
      <div style={{ position: "relative" }}>
        <ScrollUp>
          <Subtitle onClick={() => window.scrollTo(0, 0)}>
            (BACK TO TOP)
          </Subtitle>
        </ScrollUp>
      </div>
      <Subtitle>ALL RIGHTS RESERVED</Subtitle>
    </Root>
  );
};
export default Footer;

//style={{
//             cursor: "pointer",
//             position: "absolute",
//             whiteSpace: "nowrap",
//           }}
