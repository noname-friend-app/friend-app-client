import {
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import GroupBox from '../components/groupBox';
import InfoBar from '../components/infoBar';
import MemberBox from '../components/memberBox';
import { Outlet } from 'react-router-dom';
import ProfileBox from '../components/profileBox';

const App = () => {
  return (
  <>
    <Flex flexDir='column' bg={useColorModeValue('white', 'brandpurple.300')} w='100%' h='100vh' p={3}>
      <Flex w='100%'>
        <ProfileBox />
        <InfoBar />
      </Flex>
      <Flex mt={2} w='100%' h='100%'>
        <GroupBox />
        <Flex ml={2} w='57%' h='100%' bg={'brandpurple.200'} borderRadius={15}>
          <Outlet />
        </Flex>
        <MemberBox />
      </Flex>
    </Flex>
  </>
  );
};
export default App; 
