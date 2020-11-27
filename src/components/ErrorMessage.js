import styled from "styled-components";

function ErrorMessage({ error }) {
  const ErrorMessageStyle = styled.div`
    color: #f00;
  `;

  return (
    <ErrorMessageStyle>
      <p>There was an error </p>
      <pre>{error}</pre>
    </ErrorMessageStyle>
  );
}

export default ErrorMessage;
