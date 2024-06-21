import { Box, Heading, VStack, Input, Button, Text, Grid } from '@chakra-ui/react';
import { useState } from 'react';

const QA = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleAsk = () => {
    // Logic to get answers from AI or human experts
    const newAnswer = `Answer to: ${question}`;
    setAnswers([...answers, newAnswer]);
    setQuestion('');
  };

  return (
    <Box p={4} bgImage="url('/path/to/background.jpg')" bgSize="cover" bgPosition="center">
      <Heading fontSize="2xl" color="teal.500" textShadow="1px 1px #ccc">Real-time Q&A</Heading>
      <Grid templateColumns="1fr" gap={4} alignItems="center">
        <Input placeholder="Ask a question..." value={question} onChange={(e) => setQuestion(e.target.value)} />
        <Button colorScheme="teal" onClick={handleAsk} _hover={{ bg: "teal.600" }}>Ask</Button>
        {answers.map((answer, index) => (
          <Text key={index} fontSize="lg" lineHeight="tall" spacing={2}>{answer}</Text>
        ))}
      </Grid>
    </Box>
  );
};

export default QA;