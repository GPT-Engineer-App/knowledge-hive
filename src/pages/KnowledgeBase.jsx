import { Box, Heading, Text, VStack, Button, Input, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useState } from 'react';

const KnowledgeBase = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('public');

  const handleCreate = () => {
    // Logic to create knowledge base
    console.log(`Creating ${type} knowledge base: ${name}`);
  };

  return (
    <Box p={4}>
      <Heading>Create Knowledge Base</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="type">
          <FormLabel>Type</FormLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" onClick={handleCreate}>Create</Button>
      </VStack>
    </Box>
  );
};

export default KnowledgeBase;