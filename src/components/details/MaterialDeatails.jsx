import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MaterialsLayout from "../../layout/MaterialsLayout";

const MaterialDeatails = ({ materials }) => {
  const [materialDetails, setMaterialDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const newMaterialItem = materials.find((item) => item.id === +id);
    setMaterialDetails(newMaterialItem);
  }, [materials, id]);

  return (
    <>
      <Container>
        <h3>{materialDetails.title}</h3>
      </Container>
      <Layoutcontainer>
        <MaterialsLayout />
      </Layoutcontainer>
      <Outlet />
    </>
  );
};

export default MaterialDeatails;

const Layoutcontainer = styled.div`
  background-color: #87e387;
  padding: 20px;
  margin-top: 15%;
`;
const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  width: 800px;
  margin-left: 400px;
  
`;
