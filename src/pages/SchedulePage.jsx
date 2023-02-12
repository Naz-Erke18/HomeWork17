import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SchedulePage = () => {
  const navigation = useNavigate();

  const notificationPage = () => {
    navigation("/notifications");
  };
  return (
    <Container>
      <StyledButton onClick={notificationPage}>
        Go to Notification Page
      </StyledButton>
    </Container>
  );
};

export default SchedulePage;

const Container = styled.div`
  align-self: center;
  justify-content: center;
  margin-top: 50px;
  width: 800px;
  margin-left: 300px;
`;
const StyledButton = styled.button`
  border-radius: 40px;
  color: #eee7e7;
  background-color: rgb(25, 174, 159);
  padding: 15px 25px;
  margin-top: 150px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
