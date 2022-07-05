import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import './styles.css'
const Login = () => {
  return (
    <>
      <Flex w="100%" h="100vh" p={{ base: 3, md: 5 }} bg="brandpurple.300">
        <Flex
          rounded={10}
          w={{ base: "100%", md: "50%" }}
          h="100%"
          bg="brandpurple.200"
          p={5}
          justifyContent="center"
        >
          <Flex
            w={{ base: "100%", md: "70%" }}
            flexDir={"column"}
            alignSelf={"center"}
          >
            <Heading
              fontSize={{ base: 50, sm: 50, md: 60 }}
              alignSelf={"center"}
            >
              Welcome Back
            </Heading>
            <Text alignSelf={"center"}>Please login to continue</Text>
            <Flex w="70%" alignSelf={"center"} flexDir="column">
              <Input
                mt={10}
                variant={"flushed"}
                color="white"
                borderColor={"white"}
                placeholder="Username/Email"
              />
              <Input
                mt={5}
                variant={"flushed"}
                color="white"
                borderColor={"white"}
                placeholder="Password"
              />
              <Text
                _hover={{ cursor: "pointer", color: "white" }}
                color="brandpurple.100"
                mt={3}
                alignSelf={"flex-end"}
              >
                Forgot Password?
              </Text>
              <Button bg="white" color="black" w="100%" h={10} mt={5}>
                Login
              </Button>
            </Flex>
            <Flex alignSelf={"center"} mt={3}>
              <Text>Dont have an account?</Text>
              <Text
                ml={2}
                _hover={{ cursor: "pointer", color: "white" }}
                color="brandpurple.100"
              >
                Sign up
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          className="area"
          w="50%"
          h="100%"
          ml={2}
          display={{ base: "none", md: "flex" }}
        >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
