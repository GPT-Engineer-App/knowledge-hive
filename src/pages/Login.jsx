import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SupabaseAuthUI } from '../integrations/supabase/auth';
import { useEffect } from 'react';
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';

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
          <Box>
            <SupabaseAuthUI />
            <Text>Don't have an account? Sign up above.</Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;