import { Heading, Flex } from "@chakra-ui/react";
import Button from "./button";
import GroupCard from "./groupCard";

const GroupBox = () => {
  return (
    <>
      <Flex
        flexDir="column"
        p={4}
        justifyContent={"space-between"}
        mt={2}
        w={"100%"}
        h="100%"
        rounded={"15"}
        bg="brandpurple.200"
        overflow="scroll"
      >
        <Heading alignSelf={"center"} fontWeight="600">
          Groups
        </Heading>
        <Flex
          overflowY="scroll"
          flexDir={"column"}
          alignSelf={"center"}
          w="80%"
          h="50%"
        >
          {[...Array(50)].map((_, index) => (
            <GroupCard key={index} index={index} />
          ))}
        </Flex>
        <Flex justify={"center"} flexDir={"column"} w={"100%"}>
          <Button
            style={{ width: 150, alignSelf: "center" }}
            mb={100}
            action={() => null}
          >
            Join Group
          </Button>
          <Button
            style={{ width: 150, alignSelf: "center", marginTop: 20 }}
            action={() => null}
          >
            Create Group
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default GroupBox;
