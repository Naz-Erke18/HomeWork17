import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotificationPage = () => {
  const navigation = useNavigate();
  const materialsPage = () => {
    navigation("/courses/materials");
  };
  return (
    <Container>
      <StyledButton onClick={materialsPage}>Go to Materilas Page</StyledButton>
    </Container>
  );
};

export default NotificationPage;

const Container = styled.div`
  align-self: center;
  justify-content: center;
  margin-top: 50px;
  width: 800px;
  margin-left: 400px;
  margin-top: 150px;
`;
const StyledButton = styled.button`
  border-radius: 40px;
  color: #eee7e7;
  background-color: rgb(25, 174, 159);
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
