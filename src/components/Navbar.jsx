import { Box, Flex, Link, Spacer, Heading, Image, Input, InputGroup, InputRightElement, IconButton, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../assets/logo.png'; // Assuming you have a logo image in the assets folder
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const [showCourses, setShowCourses] = useState(false);

  const handleSearch = () => {
    navigate('/search', { state: { query: searchQuery } });
  };

  return (
  <Box bg="white" boxShadow="md" p={4} w="100%" maxW="1200px" mx="auto">
    <Flex align="center" wrap="wrap">
      <Image src={logo} alt="Logo" boxSize="50px" />
      <Heading size="md" color="teal.500" ml={4}>Knowledge Sharing Platform</Heading>
      <Spacer />
      <InputGroup size="md" maxW="300px" mx={2}>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <IconButton
            h="1.75rem"
            size="sm"
            onClick={handleSearch}
            icon={<FaSearch />}
            aria-label="Search"
          />
        </InputRightElement>
      </InputGroup>
      <Flex>
        <Link as={RouterLink} to="/" color="teal.500" mx={2}>Home</Link>
        <Box position="relative" onMouseEnter={() => setShowCourses(true)} onMouseLeave={() => setShowCourses(false)}>
          <Link as={RouterLink} to="/courses" color="teal.500" mx={2}>Courses</Link>
          {showCourses && (
            <Box position="absolute" bg="white" boxShadow="md" p={4} borderRadius="md" zIndex="10">
              <VStack align="start">
                <Text>Category 1</Text>
                <Text>Category 2</Text>
                <Text>Category 3</Text>
              </VStack>
            </Box>
          )}
        </Box>
        <Link as={RouterLink} to="/community" color="teal.500" mx={2}>Community</Link>
        <Link as={RouterLink} to="/knowledge-base" color="teal.500" mx={2}>Knowledge Base</Link>
        <Link as={RouterLink} to="/qa" color="teal.500" mx={2}>Q&A</Link>
        <Link as={RouterLink} to="/about" color="teal.500" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" color="teal.500" mx={2}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
  );
}

export default Navbar;