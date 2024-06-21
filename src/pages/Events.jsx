import { Box, Heading, VStack, Button, Input, FormControl, FormLabel, Text, Spinner, Flex, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useEvents, useAddEvent, useUpdateEvent, useDeleteEvent } from '../integrations/supabase/index.js';

const Events = () => {
  const { data: events, isLoading, isError, error } = useEvents();
  const addEvent = useAddEvent();
  const updateEvent = useUpdateEvent();
  const deleteEvent = useDeleteEvent();
  const [newEvent, setNewEvent] = useState({ name: '', date: '' });
  const [editingEvent, setEditingEvent] = useState(null);
  const toast = useToast();

  const handleAddEvent = async () => {
    try {
      await addEvent.mutateAsync(newEvent);
      setNewEvent({ name: '', date: '' });
      toast({ title: 'Event added successfully', status: 'success', duration: 3000, isClosable: true });
    } catch (error) {
      toast({ title: 'Error adding event', description: error.message, status: 'error', duration: 3000, isClosable: true });
    }
  };

  const handleUpdateEvent = async () => {
    try {
      await updateEvent.mutateAsync(editingEvent);
      setEditingEvent(null);
      toast({ title: 'Event updated successfully', status: 'success', duration: 3000, isClosable: true });
    } catch (error) {
      toast({ title: 'Error updating event', description: error.message, status: 'error', duration: 3000, isClosable: true });
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent.mutateAsync(id);
      toast({ title: 'Event deleted successfully', status: 'success', duration: 3000, isClosable: true });
    } catch (error) {
      toast({ title: 'Error deleting event', description: error.message, status: 'error', duration: 3000, isClosable: true });
    }
  };

  if (isLoading) return <Spinner />;
  if (isError) return <Text>Error: {error.message}</Text>;

  return (
    <Box p={4}>
      <Heading mb={4}>Events</Heading>
      <VStack spacing={4} align="stretch">
        {events.map(event => (
          <Box key={event.id} p={4} bg="gray.100" borderRadius="md">
            {editingEvent?.id === event.id ? (
              <VStack spacing={2} align="stretch">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input value={editingEvent.name} onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })} />
                </FormControl>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input type="date" value={editingEvent.date} onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })} />
                </FormControl>
                <Button colorScheme="teal" onClick={handleUpdateEvent}>Update Event</Button>
                <Button variant="outline" onClick={() => setEditingEvent(null)}>Cancel</Button>
              </VStack>
            ) : (
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="lg" fontWeight="bold">{event.name}</Text>
                  <Text>{new Date(event.date).toLocaleDateString()}</Text>
                </Box>
                <Box>
                  <Button size="sm" onClick={() => setEditingEvent(event)}>Edit</Button>
                  <Button size="sm" colorScheme="red" ml={2} onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
                </Box>
              </Flex>
            )}
          </Box>
        ))}
      </VStack>
      <Box mt={8}>
        <Heading size="md" mb={4}>Add New Event</Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
          </FormControl>
          <Button colorScheme="teal" onClick={handleAddEvent}>Add Event</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Events;