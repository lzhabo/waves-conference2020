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
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.8)"};
`;

export default Subtitle;
