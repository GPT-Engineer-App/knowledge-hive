import { Box, Heading, VStack, Input, Button, Text, Grid } from '@chakra-ui/react';
import { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Logic to perform search
    const newResult = `Result for: ${query}`;
    setResults([...results, newResult]);
    setQuery('');
  };

  return (
    <Box p={4} bgImage="url('/path/to/background.jpg')" bgSize="cover" bgPosition="center">
      <Heading fontSize="3xl" color="teal.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)">
        Advanced Search
      </Heading>
      <Grid templateColumns="1fr auto" gap={4} alignItems="center" mt={4}>
        <Input 
          placeholder="Search..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <Button 
          colorScheme="teal" 
          onClick={handleSearch} 
          _hover={{ bg: 'teal.600' }}
        >
          Search
        </Button>
      </Grid>
      <VStack spacing={4} align="stretch" mt={4}>
        {results.map((result, index) => (
          <Text key={index} fontSize="lg" lineHeight="tall" spacing={2}>
            {result}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Search;