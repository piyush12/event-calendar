import styled, { css } from "styled-components";
import { Dialog as ReachDialog } from "@reach/dialog";

export const flex = css`
  display: flex;
`;
export const flexInBetween = css`
  justify-content: space-between;
`;

export const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

export const button = css`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #607d8b;
  }
`;

export const Dialog = styled(ReachDialog)`
  box-shadow: 1px 1px 30px hsla(0, 0%, 0%, 0.15);
  border: solid 2px #673ab7;
  border-radius: 0.8rem;
  padding: 1rem;
  position: relative;

  .close-modal {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 0.125rem;
    right: 0.125rem;
    font-size: 1.5rem;
    color: #607d8b;
  }

  .modal-title {
    margin: 0;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: #607d8b;
  }
`;
