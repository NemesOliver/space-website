import { motion } from "framer-motion";
import styled from "styled-components";

export const NavMobile = styled(motion.div)`
  z-index: 5;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(70px);
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;

  ul {
    list-style: none;
    margin-top: 7rem;
    margin-left: 2rem;

    li {
      margin-bottom: 2rem;
      cursor: pointer;
      span {
        font-weight: bold;
        color: white;
        margin-right: 0.5rem;
      }
    }

    .active {
      border-right: 4px solid white;
    }
  }
`;
