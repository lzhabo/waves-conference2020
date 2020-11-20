import styled from "@emotion/styled";
import React from "react";
import Subtitle from "./Subtitle";

interface IProps {
  num: number;
  description: string;
}

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const Devider: React.FC<IProps> = ({ description, num }) => {
  return (
    <Root>
      <Subtitle color={"#00A575"} style={{ padding: "0 33px 0 100px" }}>
        (0{num})
      </Subtitle>
      <Subtitle style={{ textTransform: "uppercase", padding: "33px 0" }}>
        {description}
      </Subtitle>
    </Root>
  );
};
export default Devider;
