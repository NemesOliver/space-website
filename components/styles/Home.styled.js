import styled from "styled-components";

export const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/assets/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .text {
    padding-top: 10vh;
    h1 {
      margin: 2rem 0 2rem 0;
    }

    /* margin-bottom: 10rem; */
  }
`;
