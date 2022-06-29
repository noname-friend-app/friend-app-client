import { Flex, Text } from "@chakra-ui/react";

const GroupCard = ({ name="The three friendly idiots", index }) => {
  return (
    <>
      <Flex
        _hover={{ cursor: "pointer", bg: "brandpurple.100" }}
        rounded={5}
        p={2}
        h={900}
        mt={index !== 0 ? 3 : 0}
        justifyContent={"center"}
        bg={
          index === 0
            ? "brandpurple.100"
            : index % 2 === 0
            ? "none"
            : "brandpurple.300"
        }
      >
        <Text noOfLines={1} fontSize={20} fontWeight="600">
          {name}
        </Text>
      </Flex>
    </>
  );
};
export default GroupCard;
