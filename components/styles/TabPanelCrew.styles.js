import styled from "styled-components";

export const TabPanelCrew = styled.div`
  h4 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  .dot {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    opacity: 0.3;
    margin: 2rem 0.8rem;
  }

  .active {
    opacity: 1;
  }

  .position {
    opacity: 0.5;
    font-size: 1rem;
    font-family: "Lora";
  }
`;
