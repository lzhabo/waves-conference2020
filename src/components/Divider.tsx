import styled from "@emotion/styled";
import React from "react";
import Subtitle from "./Subtitle";

interface IProps {
  num: number;
  description: string;
  bordered?: boolean;
  withPadding?: boolean;
}

const Root = styled.div<{ bordered?: boolean }>`
  display: flex;
  align-items: center;
  ${({ bordered }) =>
    bordered && "border-bottom: 2px solid rgba(255, 255, 255, 0.24)"};
  padding: 56px 100px;
  @media (max-width: 360px) {
    padding: 56px 0;
  }
`;

const Divider: React.FC<IProps> = ({ description, num, bordered }) => {
  return (
    <Root bordered={bordered}>
      <Subtitle color={"#00A575"} style={{ paddingRight: 33 }}>
        (0{num})
      </Subtitle>
      <Subtitle style={{ textTransform: "uppercase", padding: "0 33px " }}>
        {description}
      </Subtitle>
    </Root>
  );
};
export default Divider;
