import { Box, Heading, Text, VStack, Button, Input, FormControl, FormLabel, Select, Grid, GridItem, Flex, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const KnowledgeBase = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('public');

  const handleCreate = () => {
    // Logic to create knowledge base
    console.log(`Creating ${type} knowledge base: ${name}`);
  };

  return (
    <Flex p={4} bgImage="url('/path/to/background.jpg')" bgSize="cover" bgPosition="center">
      <Box w="20%" p={4} bg="white" boxShadow="md" borderRadius="md">
        <Heading fontSize="xl" mb={4} color="teal.500">Navigation</Heading>
        <VStack align="start" spacing={2}>
          <Link as={RouterLink} to="/knowledge-base/section1" color="teal.500">Section 1</Link>
          <Link as={RouterLink} to="/knowledge-base/section2" color="teal.500">Section 2</Link>
          <Link as={RouterLink} to="/knowledge-base/section3" color="teal.500">Section 3</Link>
        </VStack>
      </Box>
      <Box w="80%" p={4} ml={4} bg="white" boxShadow="md" borderRadius="md">
        <Heading fontSize="3xl" color="teal.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)">Create Knowledge Base</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={4}>
          <GridItem colSpan={2}>
            <FormControl id="name">
              <FormLabel fontSize="lg" lineHeight="tall">Name</FormLabel>
              <Input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fontSize="lg" 
                lineHeight="tall"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="type">
              <FormLabel fontSize="lg" lineHeight="tall">Type</FormLabel>
              <Select 
                value={type} 
                onChange={(e) => setType(e.target.value)} 
                fontSize="lg" 
                lineHeight="tall"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button 
              colorScheme="teal" 
              onClick={handleCreate} 
              _hover={{ bg: 'teal.600' }}
              fontSize="lg" 
              lineHeight="tall"
            >
              Create
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default KnowledgeBase;