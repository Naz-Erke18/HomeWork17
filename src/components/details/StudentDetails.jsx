import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StudentDetails = ({ students }) => {
  const [studentDetails, setStudentDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const newStudentItem = students.find((item) => item.id === +id);
    setStudentDetails(newStudentItem);
  }, [students, id]);

  return (
    <Container>
      <h3>{studentDetails.title}</h3>
    </Container>
  );
};

export default StudentDetails;

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  width: 800px;
  margin-left: 400px;
  font-size: 40px;
`;
