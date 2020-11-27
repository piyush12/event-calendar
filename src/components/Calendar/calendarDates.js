import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { isSameDay, isSameMonth, format, isEqual } from "date-fns";
import shortid from "shortid";

import { weekInterval } from "../../utils/utils";
import { button } from "../../utils/styles";
import useCalendar from "../../utils/useCalendar";
import { Modal, ModalButton, ModalContent } from "../Modal";
import EventForm from "../Form";
import { useState } from "react";
import useLocalStorage from "../../utils/useLocalStorage";
import EventList from "./eventList";

const DateRow = styled.div`
  display: flex;
`;

const DateGrid = styled.div``;

const DateStyle = styled.div`
  position: relative;
  background: #e0e0e0;
  height: 6rem;
  display: flex;
  flex-direction: column;
  flex: 1 1;
  margin: 0.2rem;
  &:hover {
    background: #fff;
  }

  .date {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    text-align: right;
    padding: 0.2rem;
    font-weight: bold;
    color: #795548;
    font-size: 0.8rem;
  }
  &.current-date {
    background: #2196f3;
    color: #fff;

    & > .add-icon {
      color: #fff;
    }
    & > .date {
      color: #fff;
    }
  }
  &.other-month-date {
    background: #bdbdbd;
  }
  .add-icon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${button};
    font-weight: bold;
    font-size: 1.5rem;
  }
  .events {
    background: #4caf50;
    border-radius: 4px;
    width: 50px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
    color: #fff;
    font-size: 0.5rem;
    cursor: pointer;

    .event-count {
      position: absolute;
      top: -9px;
      right: 0;
      background: #e91e63;
      width: 15px;
      height: 15px;
      border-radius: 55px;
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 8px;
    }
  }
`;

function groupInEvents(acc, ev) {
  const isExisting = acc.find((d) => parseInt(d.date) === ev.date);
  if (!isExisting) {
    acc.push({
      eventCount: 1,
      eventData: [ev.eventData],
      date: ev.date,
    });
  } else {
    isExisting.eventCount = parseInt(isExisting.eventCount) + 1;
    isExisting.eventData = [...isExisting.eventData, ev.eventData];
  }
  return acc;
}

function CalendarDates() {
  const [month] = useCalendar();
  const datesArr = weekInterval(new Date(month));
  const [show, setShow] = useState(false);
  const [value, setValue] = useLocalStorage("added-events");

  const groupEvents = value.reduce(groupInEvents, []);

  const handleFormSubmit = (d) => (formData) => {
    const date = +new Date(d);
    const obj = {
      eventCount: 1,
      eventData: formData,
      date: date,
    };
    setValue([...value, obj]);
    setShow(true);
  };

  const handleClick = () => {
    setShow(false);
  };

  return (
    <DateGrid>
      {datesArr.map((week, i) => {
        return (
          <DateRow key={week}>
            {week &&
              week.map((d) => {
                const sameDay = isSameDay(d, new Date(month))
                  ? "current-date"
                  : "";
                const sameMonth = !isSameMonth(d, new Date(month))
                  ? "other-month-date"
                  : "";

                return (
                  <DateStyle key={d} className={[sameDay, sameMonth]}>
                    <div className="date">{d.getDate()}</div>
                    {isSameMonth(d, new Date(month)) && (
                      <Modal onHide={show}>
                        <ModalButton>
                          <button className="add-icon" onClick={handleClick}>
                            <GoPlus />
                          </button>
                        </ModalButton>
                        <ModalContent aria-label="add event" title="Add Event">
                          <EventForm
                            date={format(d, "MMM do")}
                            onSubmit={handleFormSubmit(d)}
                          />
                        </ModalContent>
                      </Modal>
                    )}

                    {groupEvents.map((event) => {
                      if (isEqual(new Date(event.date), d)) {
                        return (
                          <Modal>
                            <ModalButton>
                              <div className="events" key={shortid.generate()}>
                                EVENT{" "}
                                <span className="event-count">
                                  {event.eventCount}
                                </span>
                              </div>
                            </ModalButton>
                            <ModalContent aria-label="events" title="Event">
                              <EventList event={event.eventData} />
                            </ModalContent>
                          </Modal>
                        );
                      }
                      return null;
                    })}
                  </DateStyle>
                );
              })}
          </DateRow>
        );
      })}
    </DateGrid>
  );
}

export default CalendarDates;
