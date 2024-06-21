import { Box, Heading, VStack, Text, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const Community = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    // Logic to share post
    setPosts([...posts, post]);
    setPost('');
  };

  return (
    <Box p={4}>
      <Heading>Community Interaction</Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Share something..." value={post} onChange={(e) => setPost(e.target.value)} />
        <Button colorScheme="teal" onClick={handlePost}>Post</Button>
        {posts.map((p, index) => (
          <Text key={index}>{p}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Community;