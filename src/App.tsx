import styled from "@emotion/styled";
import React from "react";
import FirstPage from "./screens/FirstPage";
import Header from "./screens/Header";
import Agenda from "./screens/Agenda";
import TimeTable from "./screens/TimeTable";
import Footer from "./screens/Footer";
import Contacts from "./screens/Contacts";
import Speakers from "./screens/Speakers";
import { injectGlobal } from "emotion";
import tenor from "./fonts/TenorSans-Regular.ttf";
import ibm from "./fonts/IBMPlexSans-Regular.ttf";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: Tenor Sans;
    src: url(${tenor})   ;
  }
  @font-face {
    font-family: IBM Plex Sans;
    src: url(${ibm});
  }
  }`;

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 0 40px;
  @media (max-width: 360px) {
    padding: 0 16px;
  } ;
`;
const App: React.FC<IProps> = () => {
  return (
    <Root>
      <FirstPage />
      <Agenda />
      <TimeTable />
      <Speakers />
      <Contacts />
      <Footer />
    </Root>
  );
};
export default App;
