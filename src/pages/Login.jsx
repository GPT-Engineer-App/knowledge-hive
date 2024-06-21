import { Box, Heading, VStack, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SupabaseAuthUI } from '../integrations/supabase/auth.jsx';
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
        <Box>
          <SupabaseAuthUI />
          <Text>Don't have an account? Sign up above.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;