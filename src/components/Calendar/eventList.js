import styled from "styled-components";

const EventListUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    font-size: 1.2rem;
    color: hsl(197, 100%, 44%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }
  button {
    background: none;
    color: hsl(197, 100%, 44%);
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

function EventList({ event }) {
  return (
    <EventListUl>
      {event.map((item) => (
        <li>
          <div className="bx">
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
          {/*<div className="bx">
            <button>
              <GoTrashcan />
            </button>
          </div>*/}
        </li>
      ))}
    </EventListUl>
  );
}

export default EventList;
