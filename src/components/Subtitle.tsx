import styled from "@emotion/styled";

interface IProps {
  color?: string;
}

const Subtitle = styled.div<IProps>`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;

  color: ${({ color }) => color ?? "#fff"};
`;

export default Subtitle;
