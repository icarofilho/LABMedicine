import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  margin: 10px 0;
  gap: 2px;
  height: 100%;
  & select {
  }
`;

export const StyledInput = styled.input`
  width: 95%;
  height: 100%;
  padding: 10px;
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;
