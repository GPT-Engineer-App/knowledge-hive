import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to the Knowledge Sharing Platform</Heading>
        <Text fontSize="xl">Your go-to place for creating, sharing, and discovering knowledge.</Text>
        <Button as={RouterLink} to="/about" colorScheme="teal" size="lg">Learn More</Button>
        <Button as={RouterLink} to="/knowledge-base" colorScheme="teal" size="lg">Knowledge Base</Button>
        <Button as={RouterLink} to="/qa" colorScheme="teal" size="lg">Q&A</Button>
        <Button as={RouterLink} to="/upload" colorScheme="teal" size="lg">Upload Document</Button>
        <Button as={RouterLink} to="/community" colorScheme="teal" size="lg">Community</Button>
        <Button as={RouterLink} to="/search" colorScheme="teal" size="lg">Search</Button>
        <Button as={RouterLink} to="/recommendations" colorScheme="teal" size="lg">Recommendations</Button>
        <Button as={RouterLink} to="/access-control" colorScheme="teal" size="lg">Access Control</Button>
      </VStack>
    </Container>
  );
};

export default Index;