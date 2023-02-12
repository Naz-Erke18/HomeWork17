import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StudentsPage = ({ students }) => {
  return (
    <Container>
      {students.map((item, index) => {
        return (
          <Link to={`${item.id}/details`} key={index}>
            <ul>
              <li>
                <h2>{item.title}</h2>
              </li>
              <StyledButton>Details</StyledButton>
            </ul>
          </Link>
        );
      })}
    </Container>
  );
};

export default StudentsPage;

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  width: 800px;
  margin-left: 400px;
  ul {
    justify-self: center;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border: 1px solid grey;
    padding: 20px;
    margin-bottom: 50px;
    margin-left: 150px;
  }
  li {
    color: black;
    font-size: 20px;
  }
`;
const StyledButton = styled.button`
  border-radius: 20px;
  width: 200px;
  color: #eee7e7;
  background-color: rgb(25, 174, 159);
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
