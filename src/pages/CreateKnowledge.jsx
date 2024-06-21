import { Box, Heading, VStack, Input, Button, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const CreateKnowledge = () => {
  const { session } = useSupabaseAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();

  const handleCreate = async () => {
    // Logic to create knowledge
    console.log(`Creating knowledge: ${title}`);
    toast({ title: 'Knowledge created successfully', status: 'success', duration: 3000, isClosable: true });
  };

  if (!session) {
    return <Text>You must be logged in to create knowledge.</Text>;
  }

  return (
    <Box p={4}>
      <Heading mb={4}>Create Knowledge</Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <Button colorScheme="teal" onClick={handleCreate}>Create</Button>
      </VStack>
    </Box>
  );
};

export default CreateKnowledge;