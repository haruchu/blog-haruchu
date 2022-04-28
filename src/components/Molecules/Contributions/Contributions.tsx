import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

interface ContributionProps {
  contributions: any;
}

const Contributions: React.FC<ContributionProps> = ({ contributions }) => {
  const today = new Date(); // 変数が呼ばれた時の日時がDate型で取得できる
  const year = today.getFullYear();

  return (
    <Container>
      <Year>{year}</Year>
      <div className="description-scales">
        <div>Soft</div>
        <div className="scales">
          <div className="scale color-scale-very-soft" data-tip="~2h"></div>
          <div className="scale color-scale-soft" data-tip="2~4h"></div>
          <div className="scale color-scale-hard" data-tip="4~7h"></div>
          <div className="scale color-scale-very-hard" data-tip="7h~"></div>
        </div>
        <div>Hard</div>
      </div>
      <Calender>
        <CalendarHeatmap
          startDate={new Date(year + "-01-01")}
          endDate={new Date(year + "-12-31")}
          values={contributions}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            if (value.totalTime > 7) {
              return `color-scale-very-hard`;
            } else if (value.totalTime > 4) {
              return `color-scale-hard`;
            } else if (value.totalTime > 2) {
              return `color-scale-soft`;
            } else {
              return `color-scale-very-soft`;
            }
          }}
          tooltipDataAttrs={(value: { date: Date; totalTime: number }) => {
            if (!value || !value.date) {
              return null;
            }
            return {
              "data-tip": `${value.date} ${value.totalTime}h`,
            };
          }}
          showWeekdayLabels={true}
          onClick={(value) => console.log(value)}
          gutterSize={2}
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

  .description-scales {
    display: flex;
    position: fixed;
    top: 230px;
    margin: 10px;
  }

  .scales {
    display: flex;
    margin: 0 5px;
  }

  .scale {
    width: 14px;
    height: 14px;
    margin: 2px;
    background: silver;
    border-radius: 50%;
  }

  .color-scale-very-soft {
    fill: #d6e685;
    background-color: #d6e685;
  }
  .color-scale-soft {
    fill: #8cc665;
    background-color: #8cc665;
  }
  .color-scale-hard {
    fill: #44a340;
    background-color: #44a340;
  }
  .color-scale-very-hard {
    fill: #1e6823;
    background-color: #1e6823;
  }
`;

const Year = styled.span`
  position: fixed;
  margin: 4px;
`;

const Calender = styled.div`
  display: inline-block;
  width: 1000px;
  margin: 30px;
  .react-calendar-heatmap-weekday-label {
    margin-right: 4px;
  }
`;

