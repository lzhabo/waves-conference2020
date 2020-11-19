import styled from "@emotion/styled";
import React from "react";
import Devider from "../components/Devider";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Speakers: React.FC<IProps> = () => {
  return (
    <Root>
      <Devider num={3} description={"Спикеры"} />
    </Root>
  );
};
export default Speakers;
