import { Box, Heading, VStack, Input, Button, Text, Grid, Flex, Checkbox, Select, SimpleGrid, Image } from '@chakra-ui/react';
import { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Logic to perform search
    const newResults = [
      { title: 'Course 1', description: 'Description for course 1', image: 'https://via.placeholder.com/150', rating: 4.7, reviews: 1300 },
      { title: 'Course 2', description: 'Description for course 2', image: 'https://via.placeholder.com/150', rating: 4.8, reviews: 4100 },
      { title: 'Course 3', description: 'Description for course 3', image: 'https://via.placeholder.com/150', rating: 4.7, reviews: 4500 },
    ];
    setResults(newResults);
    setQuery('');
  };

  return (
    <Box p={4}>
      <Flex justify="center" mb={4}>
        <Input 
          placeholder="Search..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          width="50%"
          mr={2}
        />
        <Button 
          colorScheme="teal" 
          onClick={handleSearch} 
          _hover={{ bg: 'teal.600' }}
        >
          Search
        </Button>
      </Flex>
      <Flex>
        <Box width="20%" p={4}>
          <Heading size="md" mb={4}>Filter By</Heading>
          <VStack align="start" spacing={2}>
            <Heading size="sm">Topic</Heading>
            <Checkbox>Data Science</Checkbox>
            <Checkbox>Business</Checkbox>
            <Checkbox>Computer Science</Checkbox>
            <Checkbox>Information Technology</Checkbox>
            <Text color="teal.500" cursor="pointer">Show more</Text>
            <Heading size="sm">Language</Heading>
            <Checkbox>English</Checkbox>
            <Checkbox>French</Checkbox>
            <Checkbox>Spanish</Checkbox>
            <Checkbox>Portuguese</Checkbox>
            <Text color="teal.500" cursor="pointer">Show more</Text>
            <Heading size="sm">Product</Heading>
            <Checkbox>Guided Projects</Checkbox>
            <Checkbox>Courses</Checkbox>
            <Checkbox>Specializations</Checkbox>
            <Checkbox>Professional Certificates</Checkbox>
          </VStack>
        </Box>
        <Box width="80%" p={4}>
          <Flex justify="space-between" mb={4}>
            <Text fontSize="lg">"ai" has 4,348 results</Text>
            <Select width="200px">
              <option value="best-match">Sort by: Best Match</option>
              <option value="highest-rated">Sort by: Highest Rated</option>
              <option value="most-popular">Sort by: Most Popular</option>
            </Select>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {results.map((result, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={result.image} alt={result.title} />
                <Box p={4}>
                  <Heading size="md">{result.title}</Heading>
                  <Text mt={2}>{result.description}</Text>
                  <Text mt={2} color="gray.500">{result.rating} ({result.reviews} reviews)</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Search;