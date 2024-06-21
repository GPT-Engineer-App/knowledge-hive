import { Box, Heading, VStack, Input, Button, Text, Grid, Flex, Avatar, HStack } from '@chakra-ui/react';
import { useState } from 'react';

const QA = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleAsk = () => {
    // Logic to get answers from AI or human experts
    const newAnswer = {
      text: `Answer to: ${question}`,
      expert: {
        name: 'AI Expert',
        avatar: 'https://via.placeholder.com/150'
      }
    };
    setAnswers([...answers, newAnswer]);
    setQuestion('');
  };

  return (
    <Box p={4} bgImage="url('/path/to/background.jpg')" bgSize="cover" bgPosition="center">
      <Heading fontSize="2xl" color="teal.500" textShadow="1px 1px #ccc">Real-time Q&A with Experts</Heading>
      <Grid templateColumns="1fr auto" gap={4} alignItems="center" mt={4}>
        <Input placeholder="Ask a question..." value={question} onChange={(e) => setQuestion(e.target.value)} />
        <Button colorScheme="teal" onClick={handleAsk} _hover={{ bg: "teal.600" }}>Ask</Button>
      </Grid>
      <VStack spacing={4} align="stretch" mt={4}>
        {answers.map((answer, index) => (
          <Box key={index} p={4} bg="white" borderRadius="md" boxShadow="md">
            <HStack spacing={4}>
              <Avatar src={answer.expert.avatar} />
              <VStack align="start">
                <Text fontWeight="bold">{answer.expert.name}</Text>
                <Text>{answer.text}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default QA;