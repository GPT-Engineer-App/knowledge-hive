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
      <Heading fontSize="2xl" color="teal.500" textShadow="1px 1px #ccc">Upload Document</Heading>
      <VStack spacing={4} align="stretch" bgImage="url('/path/to/background.jpg')" bgSize="cover" p={8} borderRadius="md">
        <Box display="grid" gridTemplateColumns="1fr" gap={4}>
          <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} fontSize="lg" lineHeight="tall" />
          <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} fontSize="lg" lineHeight="tall" />
        </Box>
        <Button colorScheme="teal" onClick={handleUpload} _hover={{ bg: "teal.600" }}>Upload</Button>
      </VStack>
    </Box>
  );
};

export default Upload;