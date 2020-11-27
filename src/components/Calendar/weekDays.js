import React from "react";
import styled from "styled-components";
import { WEEKS } from "../../utils/utils";

const WeeksStyle = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(7, 12rem);
  grid-auto-rows: 2rem;
  margin-top: 1rem;
  text-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 800;
  color: #455a64;
`;

const WeekDays = () => {
  return (
    <WeeksStyle>
      {WEEKS.map((week) => (
        <div key={week}>{week}</div>
      ))}
    </WeeksStyle>
  );
};

export default WeekDays;
