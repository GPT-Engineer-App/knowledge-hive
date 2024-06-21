import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, Grid } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="stretch">
      <Heading fontSize="3xl" color="teal.500" textShadow="1px 1px #000">Contact Us</Heading>
      <Text fontSize="lg" lineHeight="tall" mb={4}>If you have any questions or need further information, please feel free to contact us using the form below.</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
      </Grid>
      <FormControl id="message" mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button colorScheme="teal" mt={4} _hover={{ bg: "teal.600", transform: 'scale(1.05)', transition: '0.3s' }}>Submit</Button>
    </VStack>
  </Box>
);

export default Contact;