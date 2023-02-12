import React from "react";
import Anouncement from "../layout/Anouncement";
import Course from "../layout/Course";
import Notification from "../layout/Notification";
import Schedule from "../layout/Schedule";
import styled from "styled-components";

const Aside = () => {
  return (
    <>
      <Container>
        <h1>Logo</h1>
        <Block>
          <div>
            <ul>
              <li>
                <Course />
              </li>
              <li>
                <Anouncement />
              </li>
              <li>
                <Notification />
              </li>
              <li>
                <Schedule />
              </li>
            </ul>
          </div>
        </Block>
      </Container>
    </>
  );
};

export default Aside;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e0dcd9;
  height: 750px;
  h1 {
    color: violet;
    font-size: 50px;
    margin-left: 60px;
  }
`;
const Block = styled.div`
  padding: 0px 20px;

  ul {
    list-style: none;
  }
  li {
    margin-top: 30px;
    font-size: 30px;
    width: 300px;
background-color: white;
}
`;
