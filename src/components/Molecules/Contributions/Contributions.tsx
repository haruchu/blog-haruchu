import { MAIN_COLOR } from "../../valiables/Color";
import React from "react";
import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

interface ContributionProps {
  contributions: any;
}

const Contributions: React.FC<ContributionProps> = ({ contributions }) => {
  const today = new Date(); // 変数が呼ばれた時の日時がDate型で取得できる
  const [year, setYear] = useState(today.getFullYear());

  const nextYear = (year: number) => {
    setYear(year + 1);
    return;
  };
  const prevYear = (year: number) => {
    setYear(year - 1);
    return;
  };

  return (
    <StyledWrapper>
      <Container>
        <StyledCalenderHeader>
          <button onClick={() => prevYear(year)}>{year - 1}</button>
          <Year>{year}</Year>
          <button onClick={() => nextYear(year)}>{year + 1}</button>
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
        </StyledCalenderHeader>
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
    </StyledWrapper>
  );
};

export default Contributions;

// 仮のWrapper
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  min-height: 100vh;
  background-color: ${MAIN_COLOR.WHITE_BLUE};
`;

const Container = styled.div`
  width: 90vw;
  max-width: 1050px;
  white-space: nowrap;
  overflow-x: scroll;
  border: solid 4px ${MAIN_COLOR.DARK_BLUE};
  border-radius: 4px;
  padding: 10px;
  position: relative;

  .description-scales {
    display: flex;
    align-items: center;
    margin-left: 8px;
    padding: 8px;
    background-color: ${MAIN_COLOR.LIGHT_BLUE};
    border: 2px solid ${MAIN_COLOR.NOMAL_BLUE};
  }

  .scales {
    display: flex;
  }

  .scale {
    width: 14px;
    height: 14px;
    margin: 2px;
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
  margin: 4px;
  font-weight: 800;
`;

const StyledCalenderHeader = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 0 8px;
    padding: 4px;
    line-height: 20px;
    background-color: ${MAIN_COLOR.DARK_BLUE};
    border: none;
    border-radius: 20px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background-color: ${MAIN_COLOR.NOMAL_BLUE};
    }
  }
`;

const Calender = styled.div`
  display: inline-block;
  width: 1000px;
  margin-top: 60px;
`;
