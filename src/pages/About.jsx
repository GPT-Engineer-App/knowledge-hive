import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Our Knowledge Sharing Platform</Heading>
      <Text fontSize="lg" mb={6}>
        Our platform is designed to facilitate the creation and sharing of knowledge. Whether you are an individual looking to share your expertise or an organization aiming to manage a knowledge base, our platform provides the tools you need.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Core Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Text ml={2}>Knowledge Base Management: Create public or private knowledge bases.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Expert Resources: Integrate AI and human experts.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Q&A System: Real-time Q&A feature.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Knowledge Creation and Sharing: Upload documents with AI assistance.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Community Interaction: Share, comment, and like.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Advanced Search: Quickly find the knowledge you need.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Personalized Learning Recommendations: Get personalized content recommendations.</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Simplified Access Control: Invite editors and set access permissions.</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;