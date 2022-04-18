/* eslint-disable react/jsx-key */
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
    <Wrapper>
      <StyledCircle times={studyTimes.map(item => item.time)}></StyledCircle>
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
export default Example;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const StyledCircle = styled.div<{ times: number[]; }>`
  display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 300px;
	font-size: 26px;
	font-weight: 700;
	border-radius: 50%;
  ${(props) => createCircle(props.times)}
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
`
