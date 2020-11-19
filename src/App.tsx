import styled from "@emotion/styled";
import React from "react";
import { injectGlobal } from "emotion";
import tenor from "./fonts/TenorSans-Regular.ttf";
import ibm from "./fonts/IBMPlexSans-Regular.ttf";
import FirstPage from "./screens/FirstPage";
import Header from "./screens/Header";
import Agenda from "./screens/Agenda";
import TimeTable from "./screens/TimeTable";

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
`;

const App: React.FC<IProps> = () => {
  return (
    <Root>
      <Header />
      <FirstPage />
      <Agenda />
      <TimeTable />
    </Root>
  );
};
export default App;
