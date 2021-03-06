import styled from "styled-components";

const TechnologyPage = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
  padding-bottom: 3rem;
  background-image: url("/assets/technology/background-technology-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .text {
    display: flex;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    color: white;
    margin-right: 1rem;
  }
`;

export default TechnologyPage;
