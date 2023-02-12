import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AmouncementPage = () => {
  const navigation = useNavigate();
  const goToStudentsPage = () => {
    navigation("/courses/students");
  };
  return (
    <Container>
      <StyledButton onClick={goToStudentsPage}>Go to Student Page</StyledButton>
    </Container>
  );
};

export default AmouncementPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  width: 800px;
  margin-left: 300px;
  color: white;
  font-size: 40px;
`;
const StyledButton = styled.button`
  border-radius: 30px;
  color: #eee7e7;
  background-color: rgb(25, 174, 159);
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
