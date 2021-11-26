import styled from "styled-components";

const Navigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: transparent;

  .nav-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: space-between;

    .hamburger {
      cursor: pointer;
      z-index: 10;
    }
  }
`;

export default Navigation;
