import { Container, Text, VStack, Heading, Button, Box, Image, Flex, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import heroImage from '../assets/hero.jpg'; // Assuming you have a hero image in the assets folder

import featureImage1 from '../assets/feature1.jpg';
import featureImage2 from '../assets/feature2.jpg';
import featureImage3 from '../assets/feature3.jpg';

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage={`url(${heroImage})`} bgSize="cover" bgPosition="center" height="70vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Container centerContent maxW="container.md" bg="rgba(255, 255, 255, 0.8)" p={10} borderRadius="md">
          <VStack spacing={4}>
            <Heading>Welcome to the Knowledge Sharing Platform</Heading>
            <Text fontSize="xl">Your go-to place for creating, sharing, and discovering knowledge.</Text>
            <Button as={RouterLink} to="/about" colorScheme="teal" size="lg">Learn More</Button>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={10}>
        <Heading textAlign="center" mb={6}>Core Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box textAlign="center">
            <Image src={featureImage1} alt="Feature 1" boxSize="150px" mx="auto" mb={4} />
            <Text>Knowledge Base Management: Create public or private knowledge bases.</Text>
          </Box>
          <Box textAlign="center">
            <Image src={featureImage2} alt="Feature 2" boxSize="150px" mx="auto" mb={4} />
            <Text>Expert Resources: Integrate AI and human experts.</Text>
          </Box>
          <Box textAlign="center">
            <Image src={featureImage3} alt="Feature 3" boxSize="150px" mx="auto" mb={4} />
            <Text>Q&A System: Real-time Q&A feature.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.md">
          <Heading textAlign="center" mb={6}>What Our Users Say</Heading>
          <VStack spacing={8}>
            <Box textAlign="center">
              <Text fontSize="lg" fontStyle="italic">"This platform has revolutionized the way we share knowledge in our organization."</Text>
              <Text fontWeight="bold" mt={2}>- User A</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="lg" fontStyle="italic">"The real-time Q&A feature is a game-changer for our team."</Text>
              <Text fontWeight="bold" mt={2}>- User B</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="lg" fontStyle="italic">"Integrating AI with human expertise has never been easier."</Text>
              <Text fontWeight="bold" mt={2}>- User C</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Final Call-to-Action Section */}
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={4}>
          <Heading>Join Our Community</Heading>
          <Text fontSize="xl">Become a part of our knowledge-sharing community today.</Text>
          <Button as={RouterLink} to="/community" colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;