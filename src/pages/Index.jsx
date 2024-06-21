import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to the Knowledge Sharing Platform</Heading>
        <Text fontSize="xl">Your go-to place for creating, sharing, and discovering knowledge.</Text>
        <Button as={RouterLink} to="/about" colorScheme="teal" size="lg">Learn More</Button>
      </VStack>
    </Container>
  );
};

export default Index;