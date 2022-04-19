/* eslint-disable react/jsx-key */
import COLOR from "../../valiables/Color";
import React, { useCallback } from "react";
import styled, { css, keyframes } from 'styled-components';
import { phone } from "../../valiables/BreakPoint";

interface studyTime {
  name: string
  time: number
}

export interface CircleProps {
  studyTimes: studyTime[]
}

const createCircle = (times: number[], totalTime: number) => {
  let circleStyle = 'background-image: radial-gradient(#f2f2f2 50%, transparent 51%), conic-gradient(';
  let fromPercent = 0;
  let toPercent = 0;
  let tempTime = 0;

  times.map((time, index) => {
    tempTime += time;
    toPercent = (tempTime / totalTime) * 100;
    circleStyle += `${COLOR[index%7]} ${fromPercent}% ${toPercent}% ${(times.length - 1 === index) ? `` : `,`}`;
    fromPercent = toPercent;
  })

  circleStyle += `);`;
  return css`${circleStyle}`;
}

const minToText = (time: number) => {
  const hourTime = time / 60;
  return hourTime.toFixed(1);
}

const Circle: React.FC<CircleProps> = ({ studyTimes }) => {

  const totalTimeCulc = useCallback(() => {
    const times = studyTimes.map(item => item.time);
    return times.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }, [studyTimes]);

  return (
    <Wrapper>
      <StyledCircle times={studyTimes.map(item => item.time)} totalTime={totalTimeCulc()}>{minToText(totalTimeCulc())}時間</StyledCircle>
      <ul>
        {
          studyTimes.map((item, index) => {
            return <StyledPrameter colorIndex={index} >{ item.name }</StyledPrameter>
          })
        }
      </ul>
    </Wrapper>
  );
};
export default Circle;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCircle = styled.div<{ times: number[], totalTime: number }>`
  display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 300px;
	font-size: 26px;
	font-weight: 700;
	border-radius: 50%;
  ${(props) => createCircle(props.times, props.totalTime)}
  animation: ${fadeIn} .5s ease-in-out;

  ${phone`
    width: 200px;
    height: 200px;
    font-size: 14px;
  `}
`

const StyledPrameter = styled.li<{ colorIndex: number }>`
  display: flex;
  align-items: center;
  list-style: none;
  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 8px;
    ${(props) => `background-color: ${COLOR[props.colorIndex]};`}
  }

  ${phone`
    font-size: 14px;
  `}
`
