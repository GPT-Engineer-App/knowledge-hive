import { Box, Heading, VStack, Text, Button, SimpleGrid, Image, Flex, Badge, Icon } from '@chakra-ui/react';
import { FaStar, FaRegClock, FaUserGraduate } from 'react-icons/fa';

const Courses = () => {
  const courses = [
    { 
      title: 'Course 1', 
      description: 'Description for course 1', 
      image: 'path/to/image1.jpg',
      rating: 4.5,
      duration: '10 hours',
      students: 1200
    },
    { 
      title: 'Course 2', 
      description: 'Description for course 2', 
      image: 'path/to/image2.jpg',
      rating: 4.7,
      duration: '8 hours',
      students: 950
    },
    { 
      title: 'Course 3', 
      description: 'Description for course 3', 
      image: 'path/to/image3.jpg',
      rating: 4.8,
      duration: '12 hours',
      students: 1500
    },
  ];

  return (
    <Box p={4}>
      <Heading fontSize="4xl" color="teal.500" textShadow="1px 1px 2px rgba(0, 0, 0, 0.7)">
        Courses
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={6}>
        {courses.map((course, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          >
            <Image src={course.image} alt={course.title} />
            <Box p={6}>
              <Heading size="md" fontSize="2xl">{course.title}</Heading>
              <Text mt={4} fontSize="lg" lineHeight="tall">{course.description}</Text>
              <Flex mt={4} align="center">
                <Icon as={FaStar} color="yellow.400" />
                <Text ml={2} fontSize="lg">{course.rating}</Text>
              </Flex>
              <Flex mt={2} align="center">
                <Icon as={FaRegClock} color="gray.500" />
                <Text ml={2} fontSize="lg">{course.duration}</Text>
              </Flex>
              <Flex mt={2} align="center">
                <Icon as={FaUserGraduate} color="gray.500" />
                <Text ml={2} fontSize="lg">{course.students} students</Text>
              </Flex>
              <Button colorScheme="teal" mt={4}>Enroll Now</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Courses;