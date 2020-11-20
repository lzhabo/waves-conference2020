import styled from "@emotion/styled";
import React from "react";
import FirstPage from "./screens/FirstPage";
import Header from "./screens/Header";
import Agenda from "./screens/Agenda";
import TimeTable from "./screens/TimeTable";
import Footer from "./screens/Footer";
import Contacts from "./screens/Contacts";
import Speakers from "./screens/Speakers";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 0 40px;
`;

const App: React.FC<IProps> = () => {
  return (
    <Root>
      <Header />
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
