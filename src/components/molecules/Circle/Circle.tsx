import COLOR from "../../valiables/Color";
import React from "react";
import styled, { css } from 'styled-components';

interface studyTime {
  name: string
  time: number
}

export interface CircleProps {
  studyTimes: studyTime[]
}

const createCircle = (times: number[]) => {
  let circleStyle = 'background-image: radial-gradient(#f2f2f2 60%, transparent 61%), conic-gradient(';
  let fromPercent = 0;
  let toPercent = 0;
  let tempTime = 0;
  const totalTime = times.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  times.map((time, index) => {
    tempTime += time;
    toPercent = (tempTime / totalTime) * 100;
    circleStyle += `${COLOR[index]} ${fromPercent}% ${toPercent}% ${(times.length - 1 === index) ? `` : `,`}`;
    fromPercent = toPercent;
  })

  circleStyle += `);`;
  return css`${circleStyle}`;
}

const Example: React.FC<CircleProps> = ({studyTimes}) => {
  return (
    <>
      <StyledCircle times={studyTimes.map(item => item.time)}></StyledCircle>
    </>
  );
};
export default Example;

const StyledCircle = styled.div<{ times: number[]; }>`
  display: flex;
	justify-content: center;
	align-items: center;
	margin-right: auto;
	margin-left: auto;
	width: 300px;
	height: 300px;
	font-size: 26px;
	font-weight: 700;
	border-radius: 50%;
  ${(props) => createCircle(props.times)}
`
