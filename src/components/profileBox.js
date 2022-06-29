import { Heading, Image, Text, Icon, Flex } from "@chakra-ui/react";
import { RiUserSettingsLine, RiUser3Line } from "react-icons/ri";

const ProfileBox = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        justify={"center"}
        bg="brandpurple.200"
        h={200}
        borderRadius={"15"}
        p={4}
      >
        <Flex>
          <Image
            src="https://bit.ly/dan-abramov"
            boxSize="50px"
            objectFit="cover"
            rounded={"50%"}
          />
          <Heading ml={5}>Alex</Heading>
        </Flex>
        <Flex w={100} alignSelf='center' flexDir='column'>
          <Flex _hover={{cursor: 'pointer', color: 'brandpurple.100'}}  mt={3} >
            <Icon h={35} w={30} as={RiUser3Line} size="20px" />
            <Text  fontWeight={'600'} alignSelf={'center'} ml={2}>Profile</Text>
          </Flex>
          <Flex _hover={{cursor: 'pointer', color: 'brandpurple.100'}}>
            <Icon h={35} w={30} as={RiUserSettingsLine} size="20px" />
            <Text  fontWeight={'600'} alignSelf={'center'} ml={2}>Settings</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfileBox;
