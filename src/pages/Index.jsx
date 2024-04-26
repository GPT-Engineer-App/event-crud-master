import React, { useState, useEffect } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Stack, Text, useToast, VStack, IconButton, Heading } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const API_URL = "https://mnwefvnykbgyhbdzpleh.supabase.co/rest/v1/notes";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg";

const Index = ({ onLogout }) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState(null);
  const toast = useToast();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  const handleAddNote = async () => {
    const payload = { note };
    const method = editingId ? "PATCH" : "POST";
    const url = editingId ? `${API_URL}?id=eq.${editingId}` : API_URL;

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey: API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      fetchNotes();
      setNote("");
      setEditingId(null);
      toast({
        title: editingId ? "Note updated" : "Note added",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDeleteNote = async (id) => {
    const response = await fetch(`${API_URL}?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey: API_KEY,
      },
    });

    if (response.ok) {
      fetchNotes();
      toast({
        title: "Note deleted",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleEditNote = (note) => {
    setNote(note.note);
    setEditingId(note.id);
  };

  return (
    <Container maxW="container.md" py={8}>
      <Button colorScheme="red" onClick={() => onLogout(false)} mb={4}>
        Log Out
      </Button>
      <VStack spacing={4} align="stretch">
        <Heading mb={6}>Event Manager</Heading>
        <FormControl>
          <FormLabel htmlFor="note">Note</FormLabel>
          <Flex>
            <Input id="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your note here..." />
            <IconButton colorScheme="blue" aria-label="Add Note" icon={<FaPlus />} onClick={handleAddNote} ml={2} />
          </Flex>
        </FormControl>
        <Stack spacing={3}>
          {notes.map((note) => (
            <Flex key={note.id} p={4} borderWidth="1px" borderRadius="lg" alignItems="center" justifyContent="space-between">
              <Text>{note.note}</Text>
              <Box>
                <IconButton aria-label="Edit Note" icon={<FaEdit />} onClick={() => handleEditNote(note)} mr={2} />
                <IconButton aria-label="Delete Note" icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteNote(note.id)} />
              </Box>
            </Flex>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
