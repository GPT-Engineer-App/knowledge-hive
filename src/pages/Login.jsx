import { Box, Heading, VStack, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth, SupabaseAuthUI } from '../integrations/supabase/auth.jsx';
import { useEffect } from 'react';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Box p={4}>
      <Heading mb={4}>Login</Heading>
      <VStack spacing={4} align="stretch">
        <SupabaseAuthUI />
        <Text>Don't have an account? Sign up below.</Text>
      </VStack>
    </Box>
  );
};

export default Login;