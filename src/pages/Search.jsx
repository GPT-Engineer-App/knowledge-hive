import { Box, Heading, VStack, Input, Button, Text } from '@chakra-ui/react';
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
    <Box p={4}>
      <Heading>Advanced Search</Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button colorScheme="teal" onClick={handleSearch}>Search</Button>
        {results.map((result, index) => (
          <Text key={index}>{result}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Search;