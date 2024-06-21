import { Box, Heading, VStack, Text, Button, Input, Grid } from '@chakra-ui/react';
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
    <Box p={4} bgImage="url('/path/to/background.jpg')" bgSize="cover" bgPosition="center">
      <Heading fontSize="3xl" color="teal.500" textShadow="1px 1px #000">
        Community Interaction
      </Heading>
      <Grid templateColumns="1fr" gap={4} alignItems="start">
        <Input 
          placeholder="Share something..." 
          value={post} 
          onChange={(e) => setPost(e.target.value)} 
        />
        <Button 
          colorScheme="teal" 
          onClick={handlePost} 
          _hover={{ bg: 'teal.600' }}
        >
          Post
        </Button>
        <VStack spacing={4} align="stretch">
          {posts.map((p, index) => (
            <Text key={index} fontSize="lg" lineHeight="tall" spacing={2}>
              {p}
            </Text>
          ))}
        </VStack>
      </Grid>
    </Box>
  );
};

export default Community;