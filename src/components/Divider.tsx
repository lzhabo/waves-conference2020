import styled from "@emotion/styled";
import React from "react";
import Subtitle from "./Subtitle";

interface IProps {
  num: number;
  description: string;
  bordered?: boolean;
}

const Root = styled.div<{ bordered?: boolean }>`
  display: flex;
  align-items: center;
  ${({ bordered }) =>
    bordered && "border-bottom: 2px solid rgba(255, 255, 255, 0.24)"}
`;

const Divider: React.FC<IProps> = ({ description, num, bordered }) => {
  return (
    <Root bordered={bordered}>
      <Subtitle color={"#00A575"} style={{ padding: "33px 100px" }}>
        (0{num})
      </Subtitle>
      <Subtitle style={{ textTransform: "uppercase", padding: "33px 100px" }}>
        {description}
      </Subtitle>
    </Root>
  );
};
export default Divider;
