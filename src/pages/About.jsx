import { Box, Heading, Text, VStack, Flex, Image, Grid } from '@chakra-ui/react';
import featureImage1 from '../assets/feature1.jpg'; // Assuming you have feature images in the assets folder
import featureImage2 from '../assets/feature2.jpg';
import featureImage3 from '../assets/feature3.jpg';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading 
        mb={4} 
        fontSize="4xl" 
        color="teal.500" 
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
      >
        About Our Knowledge Sharing Platform
      </Heading>
      <Text fontSize="xl" mb={6} lineHeight="tall">
        Our platform is designed to facilitate the creation and sharing of knowledge. Whether you are an individual looking to share your expertise or an organization aiming to manage a knowledge base, our platform provides the tools you need.
      </Text>
    </Flex>
    <Box 
      bgImage="url('/images/knowledge-sharing.jpg')" 
      bgSize="cover" 
      bgPosition="center" 
      p={10} 
      borderRadius="md"
    >
      <Heading size="lg" textAlign="center" mb={4}>Core Features</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box 
          p={4} 
          bg="white" 
          borderRadius="md" 
          boxShadow="md" 
          _hover={{ transform: 'scale(1.1)', transition: '0.3s', boxShadow: 'lg' }}
        >
          <Flex align="center">
            <Image src={featureImage1} alt="Feature 1" boxSize="100px" mr={4} />
            <Text fontSize="lg">Knowledge Base Management: Create public or private knowledge bases.</Text>
          </Flex>
        </Box>
        <Box 
          p={4} 
          bg="white" 
          borderRadius="md" 
          boxShadow="md" 
          _hover={{ transform: 'scale(1.1)', transition: '0.3s', boxShadow: 'lg' }}
        >
          <Flex align="center">
            <Image src={featureImage2} alt="Feature 2" boxSize="100px" mr={4} />
            <Text fontSize="lg">Expert Resources: Integrate AI and human experts.</Text>
          </Flex>
        </Box>
        <Box 
          p={4} 
          bg="white" 
          borderRadius="md" 
          boxShadow="md" 
          _hover={{ transform: 'scale(1.1)', transition: '0.3s', boxShadow: 'lg' }}
        >
          <Flex align="center">
            <Image src={featureImage3} alt="Feature 3" boxSize="100px" mr={4} />
            <Text fontSize="lg">Q&A System: Real-time Q&A feature.</Text>
          </Flex>
        </Box>
      </Grid>
    </Box>
  </Box>
);

export default About;