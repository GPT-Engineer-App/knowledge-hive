import { Box, Heading, VStack, Input, Button, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpload = () => {
    // Logic to upload document with AI assistance
    console.log(`Uploading document: ${title}`);
  };

  return (
    <Box p={4}>
      <Heading>Upload Document</Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <Button colorScheme="teal" onClick={handleUpload}>Upload</Button>
      </VStack>
    </Box>
  );
};

export default Upload;