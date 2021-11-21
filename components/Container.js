import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 5% 0 5%;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
