import { Box, Heading, VStack, Input, Button, Select, Grid } from '@chakra-ui/react';
import { useState } from 'react';

const AccessControl = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('editor');

  const handleInvite = () => {
    // Logic to invite editor and set access permissions
    console.log(`Inviting ${email} as ${role}`);
  };

  return (
    <Box 
      p={4} 
      bgImage="url('/path/to/background.jpg')" 
      bgSize="cover" 
      bgPosition="center"
    >
      <Heading 
        fontSize="2xl" 
        color="teal.500" 
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
      >
        Simplified Access Control
      </Heading>
      <Grid 
        templateColumns="1fr" 
        gap={4} 
        alignItems="center" 
        mt={4}
      >
        <Input 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          fontSize="lg" 
          lineHeight="tall"
        />
        <Select 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          fontSize="lg" 
          lineHeight="tall"
        >
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </Select>
        <Button 
          colorScheme="teal" 
          onClick={handleInvite} 
          _hover={{ bg: 'teal.600' }}
          fontSize="lg" 
          lineHeight="tall"
        >
          Invite
        </Button>
      </Grid>
    </Box>
  );
};

export default AccessControl;