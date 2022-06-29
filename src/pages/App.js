import { Flex, useColorModeValue } from "@chakra-ui/react";
import GroupBox from "../components/GroupBox";
import InfoBar from "../components/InfoBar";
import MemberBox from "../components/MemberBox";
import { Outlet } from "react-router-dom";
import ProfileBox from "../components/ProfileBox";

const App = () => {
  return (
    <>
      <Flex
        bg={useColorModeValue("white", "brandpurple.300")}
        w="100%"
        h="100vh"
        p={3}
      >
        <Flex w={300} h="100%" flexDir={"column"}>
          <ProfileBox />
          <GroupBox />
        </Flex>
        <Flex ml={2} flexDir={"column"} w="100%" h="100%">
          <InfoBar />
          <Flex w="100%" mt={2} h="100%">
            <Flex rounded={15} bg="brandpurple.200" w="100%">
              <Outlet />
            </Flex>
            <MemberBox />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default App;
