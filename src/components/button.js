import { Button as ButtonComp } from "@chakra-ui/react";

const Button = ({ children, action, style }) => {
  return (
    <>
      <ButtonComp
        color="white"
        bg="brandpurple.300"
        _hover={{ bg: "brandpurple.100", color: "white" }}
        onClick={action}
        style={style}
      >
        {children}
      </ButtonComp>
    </>
  );
};

export default Button;
