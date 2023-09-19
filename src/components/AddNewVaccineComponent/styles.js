import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

export const FieldsetNames = styled.fieldset`
  max-width: 48%;
  min-width: 45%;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  border-radius: 7px;
  & > input {
    outline: none;
    border: none;
    width: calc(100%);
    margin: 0;
    padding: 10px 0;
  }
  & > div {
    color: red;
  }
`;
export const FieldsetInfos = styled.fieldset`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  border-radius: 7px;
  & > input {
    outline: none;
    border: none;
  }
  & > div {
    color: red;
  }
`;
export const FieldsetTextArea = styled.fieldset`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  border-radius: 7px;
  & > input {
    outline: none;
    border: none;
  }
  & > div {
    color: red;
  }
  & > textarea {
    width: 100%;
    min-height: 300px;
    border: none;
    resize: none;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;

//!!
export const ContainerList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 20px 10px;
  border-radius: 7px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    background: lightgrey;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;
