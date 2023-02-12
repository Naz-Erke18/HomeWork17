import React from "react";
import styled from "styled-components";

const WaitingPage = () => {
  return (
    <Container>
      <h2>WaitingPage</h2>
    </Container>
  );
};

export default WaitingPage;

const Container = styled.div`
  width: 1055px;

  background-color: rgb(168, 224, 218);
  padding: 20px;
  margin-left: 480px;
  padding: 119px 200px;
  h2 {
    font-size: 35px;
  }
`;
