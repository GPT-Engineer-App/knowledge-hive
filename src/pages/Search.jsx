```jsx
import { Box, Heading, VStack, Input, Button, Text, Grid, Flex, Checkbox, Select, SimpleGrid, Image } from '@chakra-ui/react';
const Search = ({ initialQuery = '' }) => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Implement search logic here
        setResults([]); // Update with actual search results
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        if (initialQuery) {
            handleSearch();
        }
    }, [initialQuery]);

    return (
        <Box>
            <Heading>Search</Heading>
            <VStack spacing={4}>
                <Flex>
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Search..."
                    />
                    <Button onClick={handleSearch}>Search</Button>
                </Flex>
                <SimpleGrid columns={3} spacing={4}>
                    {results.map((result, index) => (
                        <Box key={index}>
                            <Text>{result}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>
        </Box>
    );
};

export default Search;