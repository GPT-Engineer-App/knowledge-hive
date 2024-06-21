import { Box, Heading, Text, Button, Flex, VStack, Image, Icon } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CourseDetails = ({ course }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    // Logic to handle course editing
    console.log(`Editing course: ${course.title}`);
  };

  const handleDelete = () => {
    // Logic to handle course deletion
    console.log(`Deleting course: ${course.title}`);
  };

  return (
    <Box p={4} bgImage="url('/images/knowledge-sharing.jpg')" bgSize="cover" bgPosition="center">
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading fontSize="4xl" color="teal.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)">
          {course.title}
        </Heading>
        <Image src={course.image} alt={course.title} boxSize="300px" mt={4} />
        <Text fontSize="xl" mt={4} lineHeight="tall">
          {course.description}
        </Text>
        <VStack spacing={4} mt={6}>
          <Button leftIcon={<Icon as={FaEdit} />} colorScheme="teal" onClick={handleEdit}>
            Edit Course
          </Button>
          <Button leftIcon={<Icon as={FaTrash} />} colorScheme="red" onClick={handleDelete}>
            Delete Course
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default CourseDetails;