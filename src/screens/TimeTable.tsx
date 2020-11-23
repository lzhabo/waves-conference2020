import styled from "@emotion/styled";
import React from "react";
import { FlexContainer } from "../components/FlexContaner";
import Event from "../components/Event";
import Divider from "../components/Divider";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
const TimeTableData = [
  {
    time: "11:00 – 12:30",
    title: "Блокчейн в государственном секторе. Наступило ли признание?",
    subtitle:
      "Пандемия коронавируса стала мощным стимулятором внедрения инноваций в государственном секторе и повысила интерес к технологиям, способным обеспечить безопасное и надежное взаимодействие большого количества потребителей и поставщиков услуг. Блокчейн стал одной из приоритетных технологий, способствующих цифровизации государственных сервисов. И, несмотря на кризис, вызванный пандемией, в 2020 году было реализовано несколько успешных проектов внедрения и применения блокчейн-технологий.",
  },
  {
    time: "12:30 – 12:50",
    title:
      "Стейблкойны «Сбербанка» как удобное средство межбанковских расчетов.",
    subtitle: "",
  },
  {
    time: "13:10 – 13:30",
    title:
      "Государственные услуги и сервисы на технологических платформах с применением блокчейна.",
    subtitle: "",
  },
  {
    time: "13:30 – 15:00",
    title: "Блокчейн для бизнеса. Proof of History.",
    subtitle:
      "Можно с уверенностью говорить о том, что блокчейн – это уже не “технология  будущего”, а практический инструмент, используемый сегодня. Разные отрасли на практике доказали, что блокчейн-технологии дают бизнесу ряд преимуществ: повышение производительности за счет оптимизации и автоматизации, ускорение взаимодействия больших сетей контрагентов, мониторинг процессов в реальном времени, интеллектуальное управление цепями поставок и многое другое.",
  },
];
const TimeTable: React.FC<IProps> = () => {
  return (
    <Root>
      <Divider num={2} description={"Расписание"} bordered />
      <FlexContainer flexDirection={"column"}>
        {TimeTableData.map((event, index) => (
          <Event {...event} key={index} />
        ))}
      </FlexContainer>
    </Root>
  );
};
export default TimeTable;
