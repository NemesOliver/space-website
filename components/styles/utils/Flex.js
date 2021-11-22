/*
Availble props:
    - direction - default = row
    - align - default = center
    - justify - default = center
*/

import styled from "styled-components";

const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
`;

export default Flex;
