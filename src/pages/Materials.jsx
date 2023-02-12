import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Materials = ({ materials }) => {
  const [searchParams, setSearchparams] = useSearchParams();
  const modalHandler = () => {
    searchParams.set("modal", "addNewMaterial");
    setSearchparams(searchParams);
  };
  const closeModalHAndler = () => {
    searchParams.delete("modal");
    setSearchparams(searchParams);
  };

  return (
    <>
      <Container>
        <Addbutton onClick={modalHandler}>Add new material</Addbutton>
        {materials.map((item, index) => {
          return (
            <Link key={index} to={`${item.id}/details/subbmited`}>
              <ul>
                <li>
                  <h2>{item.title}</h2>
                </li>
                <StyledButton>Details</StyledButton>
              </ul>
            </Link>
          );
        })}

        {searchParams.has("modal") ? (
          <Modal>
            <h3>Add new materilas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              enim molestias unde incidunt aliquam reiciendis delectus earum,
              voluptas veniam iusto dolorum voluptate doloribus quo rem quia,
              culpa eos. In, enim. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ad sint error consequuntur exercitationem
              officia minus fugit natus dolorem, ullam nulla ex, illo corrupti
              vitae odit temporibus nam vero. Modi, corporis?
            </p>
            <CloseModalButton onClick={closeModalHAndler}>
              Close modal
            </CloseModalButton>
          </Modal>
        ) : null}
      </Container>
    </>
  );
};

export default Materials;

const Modal = styled.div`
  position: fixed;
  padding: 20px;
  top: 20%;
  left: 35%;
  width: 700px;
  background-color: rgb(245, 218, 222);
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 400px;
  width: 800px;
  ul {
    justify-self: center;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 50px;
    margin-left: 150px;
  }
  li {
    color: black;
    font-size: 20px;
    font-weight: 400;
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

const Addbutton = styled.button`
  color: white;
  padding: 20px 30px;
  font-size: 20px;
  border-radius: 30px;
  border: none;
  width: 300px;
  margin-left: 500px;
  background-color: rgb(232, 131, 58);
  cursor: pointer;
`;

const CloseModalButton = styled.button`
  border-radius: 20px;
  width: 200px;
  color: #eee7e7;
  background-color: rgb(25, 174, 159);
  padding: 15px 25px;
  font-size: 20px;
  margin-left: 400px;
  border: none;
  outline: none;
  cursor: pointer;
`;
