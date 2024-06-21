import { Box, Heading, Text, VStack, Flex, Image } from '@chakra-ui/react';
import featureImage1 from '../assets/feature1.jpg'; // Assuming you have feature images in the assets folder
import featureImage2 from '../assets/feature2.jpg';
import featureImage3 from '../assets/feature3.jpg';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Our Knowledge Sharing Platform</Heading>
      <Text fontSize="lg" mb={6}>
        Our platform is designed to facilitate the creation and sharing of knowledge. Whether you are an individual looking to share your expertise or an organization aiming to manage a knowledge base, our platform provides the tools you need.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10} borderRadius="md">
      <Heading size="lg" textAlign="center" mb={4}>Core Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Image src={featureImage1} alt="Feature 1" boxSize="100px" mr={4} />
          <Text>Knowledge Base Management: Create public or private knowledge bases.</Text>
        </Flex>
        <Flex align="center">
          <Image src={featureImage2} alt="Feature 2" boxSize="100px" mr={4} />
          <Text>Expert Resources: Integrate AI and human experts.</Text>
        </Flex>
        <Flex align="center">
          <Image src={featureImage3} alt="Feature 3" boxSize="100px" mr={4} />
          <Text>Q&A System: Real-time Q&A feature.</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;