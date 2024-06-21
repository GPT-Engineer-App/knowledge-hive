import { Box, Heading, VStack, Input, Button, Select } from '@chakra-ui/react';
import { useState } from 'react';

const AccessControl = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('editor');

  const handleInvite = () => {
    // Logic to invite editor and set access permissions
    console.log(`Inviting ${email} as ${role}`);
  };

  return (
    <Box p={4}>
      <Heading>Simplified Access Control</Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </Select>
        <Button colorScheme="teal" onClick={handleInvite}>Invite</Button>
      </VStack>
    </Box>
  );
};

export default AccessControl;