import { useState } from "react";
import styled from "styled-components";

import { FormGroup } from "../../utils/styles";
import ErrorMessage from "../ErrorMessage";

const ButtonHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
    color: hsl(197, 100%, 44%);
  }
`;
const ButtonStyle = styled.button`
  border: none;
  margin: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  font-size: 125%;
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  background-color: hsl(197, 100%, 44%);
  color: white;
  padding: 0.5rem 1rem;
`;

function Form({ date, onSubmit }) {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formArray = [...event.target.elements];
    const formData = formArray.reduce((acc, elem) => {
      if (elem.id) {
        acc[elem.id] = elem.value;
      }
      return acc;
    }, {});
    setError(null);
    if (!formData.title) {
      setError("Title is required");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label>Event Name</label>
        <input type="text" id="title" />
      </FormGroup>
      <FormGroup>
        <label>Event Description</label>
        <textarea id="description" />
      </FormGroup>
      <ButtonHolder>
        <h4>Event on {date}</h4>
        <ButtonStyle type="submit">Add Event</ButtonStyle>
      </ButtonHolder>
      {error && <ErrorMessage error={error} />}
    </form>
  );
}

export default Form;
