import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const Contributions = () => {
  const today = new Date(); // 変数が呼ばれた時の日時がDate型で取得できる
  const year = today.getFullYear();

  return (
    <Container>
      <Year>
        { year }
      </Year>
      <Calender>
        <CalendarHeatmap
          startDate={new Date(year + "-01-01")}
          endDate={new Date(year + "-12-31")}
          values={[
            { date: "2022-07-03", count: 1 },
            { date: "2022-08-22", count: 2 },
            { date: "2022-07-29", count: 4 },
            { date: '2022-10-01', count: 1 },
            { date: '2022-10-03', count: 2 },
            { date: '2022-10-06', count: 3 },
            { date: '2022-10-10', count: 4 },
            { date: '2022-10-07', count: 1 },
            { date: '2022-09-15', count: 3 },
          ]}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
          tooltipDataAttrs={(value: { date: Date; count: number; }) => {
            if (!value || !value.date) {
              return null;
            }
            return {
              "data-tip": `${value.date} has count: ${
                value.count
              }`,
            };
          }}
          onClick={(value) => console.log(value)}
        />
      </Calender>
      <ReactTooltip />
    </Container>
  );
};

export default Contributions;

const Container = styled.div`
  width: 90vw;
  max-width: 1050px;
  white-space: nowrap;
  overflow-x: scroll;
  border: solid 1px #696969;
  position: relative;
`

const Year = styled.span`
  position: fixed;
  margin: 4px;
`

const Calender = styled.div`
  display: inline-block;
  width: 1000px;
  margin: 30px;
  .color-scale-1 { fill: #d6e685; }
  .color-scale-2 { fill: #8cc665; }
  .color-scale-3 { fill: #44a340; }
  .color-scale-4 { fill: #1e6823; }
`
