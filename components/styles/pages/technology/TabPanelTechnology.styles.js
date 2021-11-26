import styled from "styled-components";

export const TabPanelTechnology = styled.div`
  .tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;

    div {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: ${({ theme }) => theme.primary};
      width: 40px;
      height: 40px;
      border-radius: 50%;

      &:hover {
        border: 1px solid ${({ theme }) => theme.primary};
        transition: 0.3s all;
      }
    }
    .active {
      background: ${({ theme }) => theme.primary};
      color: #0b0d17;
    }
  }

  h4 {
    margin: 1rem 0 2rem 0;
  }
`;
