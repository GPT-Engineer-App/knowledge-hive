import { Box, Heading, VStack, Text, Button, SimpleGrid, Image } from '@chakra-ui/react';

const Courses = () => {
  const courses = [
    { title: 'Course 1', description: 'Description for course 1', image: 'path/to/image1.jpg' },
    { title: 'Course 2', description: 'Description for course 2', image: 'path/to/image2.jpg' },
    { title: 'Course 3', description: 'Description for course 3', image: 'path/to/image3.jpg' },
  ];

  return (
    <Box p={4} bgImage="url('path/to/background.jpg')" bgSize="cover" bgPosition="center">
      <Heading fontSize="4xl" color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.7)">
        Courses
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={6}>
        {courses.map((course, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s' }}
          >
            <Image src={course.image} alt={course.title} />
            <Box p={6}>
              <Heading size="md" fontSize="2xl">{course.title}</Heading>
              <Text mt={4} fontSize="lg" lineHeight="tall">{course.description}</Text>
              <Button colorScheme="teal" mt={4}>Enroll Now</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Courses;