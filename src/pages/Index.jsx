import { Container, Text, VStack, Heading, Button, Box, Image, SimpleGrid } from "@chakra-ui/react";
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
            <Heading fontSize="4xl" color="teal.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)">Welcome to the Knowledge Sharing Platform</Heading>
            <Text fontSize="xl" lineHeight="tall">Your go-to place for creating, sharing, and discovering knowledge.</Text>
            <Button as={RouterLink} to="/about" colorScheme="teal" size="lg">Learn More</Button>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box bgImage={`url(${heroImage})`} bgSize="cover" bgPosition="center" py={10}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={6} fontSize="3xl">Core Features</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Image src={featureImage1} alt="Feature 1" boxSize="150px" mx="auto" mb={4} />
              <Text fontSize="lg" lineHeight="tall">Knowledge Base Management: Create public or private knowledge bases.</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Image src={featureImage2} alt="Feature 2" boxSize="150px" mx="auto" mb={4} />
              <Text fontSize="lg" lineHeight="tall">Expert Resources: Integrate AI and human experts.</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Image src={featureImage3} alt="Feature 3" boxSize="150px" mx="auto" mb={4} />
              <Text fontSize="lg" lineHeight="tall">Q&A System: Real-time Q&A feature.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Featured Courses Section */}
      <Box bgImage={`url(${heroImage})`} bgSize="cover" bgPosition="center" py={10}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={6} fontSize="3xl">Featured Courses</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Image src={featureImage1} alt="Course 1" boxSize="150px" mx="auto" mb={4} />
              <Text fontSize="lg" lineHeight="tall">Course 1: Introduction to Knowledge Sharing</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Image src={featureImage2} alt="Course 2" boxSize="150px" mx="auto" mb={4} />
              <Text fontSize="lg" lineHeight="tall">Course 2: Advanced Knowledge Management</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Image src={featureImage3} alt="Course 3" boxSize="150px" mx="auto" mb={4} />
              <Text fontSize="lg" lineHeight="tall">Course 3: AI in Knowledge Sharing</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Community Posts Section */}
      <Box bgImage={`url(${heroImage})`} bgSize="cover" bgPosition="center" py={10}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={6} fontSize="3xl">Community Posts</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" lineHeight="tall">Post 1: How to effectively share knowledge</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" lineHeight="tall">Post 2: Best practices for knowledge management</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" lineHeight="tall">Post 3: Integrating AI with human expertise</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Knowledge Base Articles Section */}
      <Box bgImage={`url(${heroImage})`} bgSize="cover" bgPosition="center" py={10}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={6} fontSize="3xl">Knowledge Base Articles</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" lineHeight="tall">Article 1: Introduction to Knowledge Bases</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" lineHeight="tall">Article 2: Creating Effective Knowledge Bases</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" lineHeight="tall">Article 3: Managing Knowledge Bases</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box bgImage={`url(${heroImage})`} bgSize="cover" bgPosition="center" py={10}>
        <Container maxW="container.md">
          <Heading textAlign="center" mb={6} fontSize="3xl">What Our Users Say</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" fontStyle="italic" lineHeight="tall">"This platform has revolutionized the way we share knowledge in our organization."</Text>
              <Text fontWeight="bold" mt={2}>- User A</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" fontStyle="italic" lineHeight="tall">"The real-time Q&A feature is a game-changer for our team."</Text>
              <Text fontWeight="bold" mt={2}>- User B</Text>
            </Box>
            <Box textAlign="center" p={5} bg="white" borderRadius="md" boxShadow="md" _hover={{ transform: 'scale(1.05)', transition: '0.3s', boxShadow: 'lg' }}>
              <Text fontSize="lg" fontStyle="italic" lineHeight="tall">"Integrating AI with human expertise has never been easier."</Text>
              <Text fontWeight="bold" mt={2}>- User C</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Final Call-to-Action Section */}
      <Box bgImage={`url(${heroImage})`} bgSize="cover" bgPosition="center" py={10}>
        <Container centerContent maxW="container.md">
          <VStack spacing={4}>
            <Heading fontSize="3xl">Join Our Community</Heading>
            <Text fontSize="xl" lineHeight="tall">Become a part of our knowledge-sharing community today.</Text>
            <Button as={RouterLink} to="/community" colorScheme="teal" size="lg">Get Started</Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;