import { Box, Heading, Grid, GridItem, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Logic to fetch personalized recommendations
    const fetchedRecommendations = [
      'Recommendation 1',
      'Recommendation 2',
      'Recommendation 3',
    ];
    setRecommendations(fetchedRecommendations);
  }, []);

  return (
    <Box p={4} bgImage="url('/path/to/background.jpg')" bgSize="cover" bgPosition="center">
      <Heading fontSize="2xl" color="teal.500" textShadow="1px 1px #000">
        Personalized Learning Recommendations
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {recommendations.map((rec, index) => (
          <GridItem 
            key={index} 
            p={4} 
            bg="white" 
            boxShadow="md" 
            borderRadius="md" 
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
          >
            <Text fontSize="lg" lineHeight="tall" spacing={2}>{rec}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Recommendations;