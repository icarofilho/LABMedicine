import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(100vh - 50px);

  & img {
    max-height: calc(100vh - 50px);
    /* height: 100%; */
  }
`;
