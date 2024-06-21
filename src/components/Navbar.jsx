import { Box, Flex, Link, Spacer, Heading, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png'; // Assuming you have a logo image in the assets folder
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <Box bg="white" boxShadow="md" p={4}>
    <Flex align="center">
      <Image src={logo} alt="Logo" boxSize="50px" />
      <Heading size="md" color="teal.500" ml={4}>Knowledge Sharing Platform</Heading>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" color="teal.500" mx={2}>Home</Link>
        <Link as={RouterLink} to="/about" color="teal.500" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" color="teal.500" mx={2}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;