import { Box, Heading, VStack, Text, Button, SimpleGrid, Image } from '@chakra-ui/react';

const Courses = () => {
  const courses = [
    { title: 'Course 1', description: 'Description for course 1', image: 'path/to/image1.jpg' },
    { title: 'Course 2', description: 'Description for course 2', image: 'path/to/image2.jpg' },
    { title: 'Course 3', description: 'Description for course 3', image: 'path/to/image3.jpg' },
  ];

  return (
    <Box p={4}>
      <Heading>Courses</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={6}>
        {courses.map((course, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={course.image} alt={course.title} />
            <Box p={6}>
              <Heading size="md">{course.title}</Heading>
              <Text mt={4}>{course.description}</Text>
              <Button colorScheme="teal" mt={4}>Enroll Now</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Courses;