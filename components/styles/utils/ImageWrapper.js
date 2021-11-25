import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "300px"};
  margin: 0 auto;

  img {
    object-fit: contain;
  }
`;
