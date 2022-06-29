import { Flex, useColorModeValue } from "@chakra-ui/react";
import GroupBox from "../components/groupBox";
import InfoBar from "../components/infoBar";
import MemberBox from "../components/memberBox";
import { Outlet } from "react-router-dom";
import ProfileBox from "../components/profileBox";

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
