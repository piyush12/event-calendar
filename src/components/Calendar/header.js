import { addMonths, subMonths, format } from "date-fns";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import styled from "styled-components";

import { flex, flexInBetween, flexCenter, button } from "../../utils/styles";
import useCalendar from "../../utils/useCalendar";

const CalendarHeaderStyle = styled.div`
  ${flex};
  ${flexInBetween}

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: #5e35b2;
  }
`;
const Button = styled.button`
  ${flex};
  ${flexCenter};
  ${button};
  font-size: 2rem;
  background: #5e35b1;
  color: #fff;
  border-radius: 2px;
`;

function CHeaeder() {
  const [month, setMonth] = useCalendar();

  const prevMonth = () => {
    const newMonth = subMonths(month, 1);
    setMonth(newMonth);
  };
  const nextMonth = () => {
    const newMonth = addMonths(month, 1);
    setMonth(newMonth);
  };

  return (
    <CalendarHeaderStyle>
      <Button onClick={prevMonth}>
        <GoArrowLeft />
      </Button>
      <span>{format(month, "MMMM do, yyyy")}</span>
      <Button onClick={nextMonth}>
        <GoArrowRight />
      </Button>
    </CalendarHeaderStyle>
  );
}

export default CHeaeder;
