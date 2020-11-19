import styled from "@emotion/styled";
import React from "react";
import Subtitle from "./Subtitle";

interface IProps {
  num: number;
  description: string;
}

const Root = styled.div`
  display: flex;
`;

const Devider: React.FC<IProps> = ({ description, num }) => {
  return (
    <Root>
      <Subtitle color={"#00A575"} style={{ padding: "33px" }}>
        (0{num})
      </Subtitle>
      <Subtitle style={{ textTransform: "uppercase", padding: "33px" }}>
        {description}
      </Subtitle>
    </Root>
  );
};
export default Devider;
