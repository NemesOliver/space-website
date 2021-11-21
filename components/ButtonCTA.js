import styled from "styled-components";

const StyledButton = styled.button`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: none;
  font-size: 20px;
  font-family: "Lora", serif;
  letter-spacing: 1.25px;
  cursor: pointer;

  &:hover {
    outline: 50px solid rgba(151, 151, 151, 0.3);
    transition: 0.15s ease-in;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonCTA = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default ButtonCTA;
