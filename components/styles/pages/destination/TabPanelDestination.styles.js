import styled from "styled-components";

export const TabPanelDestination = styled.div`
  .tabs {
    margin: 2rem 0;

    li {
      margin: 0 0.9rem;
      cursor: pointer;

      &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
        transition: 0.2s;
      }
    }
  }

  h3 {
    margin-bottom: 2rem;
  }

  .distance {
    margin-bottom: 2rem;
  }

  .active {
    border-bottom: 3px solid white;

    p {
      color: #ffffff;
    }
  }
`;
