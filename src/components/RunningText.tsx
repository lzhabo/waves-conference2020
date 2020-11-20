import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 66px;

  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #ffffff;
  text-transform: uppercase;
`;

const RunningText: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>
        ключевыЕ экспертЫ, разрабатывающие решения на базе блокчейна
      </Title>
      <Title>
        представители бизнеса и власти, участвующиЕ в цифровой трансформации
        компаний
      </Title>
    </Root>
  );
};
export default RunningText;
