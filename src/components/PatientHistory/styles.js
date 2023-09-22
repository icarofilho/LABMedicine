import styled from "styled-components";

export const StyledCardContainer = styled.div`
  width: 290px;
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  padding: 15px;
  margin: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 10px;
    & > input {
      text-align: center;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 5px;
  text-align: center;
  width: ${(props) => (props.size ? `${(props.size + 1) * 8}px` : "auto")};
  margin: 5px;
`;

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledFieldset = styled.fieldset`
  margin: 10px 0;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid gray;
  display: flex;
  & > label {
    font-size: 1.1rem;
  }
`;
