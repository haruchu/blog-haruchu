import { phone } from "../../valiables/BreakPoint";
import React from "react";
import styled from "styled-components";

interface SkillCircleProps {
  SkillImgSrc: string;
  SkillName: string;
  Comprehension: number;
}

const ReturnComprehensionColor = (Comprehension: number) => {
  if (Comprehension == 5) {
    return "#00ff88";
  } else if (Comprehension >= 4) {
    return "#aaff00";
  } else if (Comprehension >= 3) {
    return "#ffcc00";
  } else if (Comprehension >= 2) {
    return "#ff6600";
  } else if (Comprehension >= 1) {
    return "#ff0000";
  } else {
    return "#ebeff1";
  }
};

const SkillCircle: React.FC<SkillCircleProps> = ({
  SkillImgSrc,
  SkillName,
  Comprehension,
}) => {
  return (
    <CircleWrapper Comprehension={Comprehension}>
      <div className="shape">
        <div className="mask full-mask">
          <div className="fill"></div>
        </div>
        <div className="mask">
          <div className="fill"></div>
          <div className="fill shim"></div>
        </div>
      </div>
      <SkillImg className="cutout" src={SkillImgSrc}></SkillImg>
      <SkillNameWrapper>{SkillName}</SkillNameWrapper>
    </CircleWrapper>
  );
};
export default SkillCircle;

const CircleWrapper = styled.div<{ Comprehension: number }>`
  position: relative;
  width: 220px;
  height: 220px;
  margin: 50px;
  ${phone`
    margin: 10px;
  `}
  .shape,
  .mask,
  .fill {
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }

  .shape,
  .mask,
  .fill {
    position: absolute;
    background-color: #ebeff1;
  }

  .mask,
  .fill {
    transition: transform 1s;
    border-radius: 50%;
  }

  .mask {
    clip: rect(0px, 220px, 220px, 110px);
  }

  .fill {
    clip: rect(0px, 110px, 220px, 0px);
    background-color: ${(props) =>
      ReturnComprehensionColor(props.Comprehension)};
  }

  .mask.full-mask,
  .fill {
    ${(props) =>
      `transform: rotate(calc((${props.Comprehension}/ 5) * 360deg / 2));`}
  }
  .fill.shim {
    transform: rotate(324deg);
    ${(props) =>
      `transform: rotate(calc((${props.Comprehension}/ 5) * 360deg));`}
  }
`;

const SkillNameWrapper = styled.p`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  position: absolute;
  bottom: -35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SkillImg = styled.img`
  margin-left: 15px;
  margin-top: 15px;
  width: 190px;
  height: 190px;
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;
  object-fit: cover;
`;
