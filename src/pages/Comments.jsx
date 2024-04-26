import React, { useState, useEffect } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Stack, Text, VStack, IconButton, Heading, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const API_URL = "https://mnwefvnykbgyhbdzpleh.supabase.co/rest/v1/comments";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const toast = useToast();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY,
      },
    });
    const data = await response.json();
    setComments(data);
  };

  const handleAddComment = async () => {
    const payload = { content: comment };
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
      fetchComments();
      setComment("");
      setEditingId(null);
      toast({
        title: editingId ? "Comment updated" : "Comment added",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDeleteComment = async (id) => {
    const response = await fetch(`${API_URL}?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey: API_KEY,
      },
    });

    if (response.ok) {
      fetchComments();
      toast({
        title: "Comment deleted",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleEditComment = (comment) => {
    setComment(comment.content);
    setEditingId(comment.id);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading mb={6}>Comments Manager</Heading>
        <FormControl>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Flex>
            <Input id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter your comment here..." />
            <IconButton colorScheme="blue" aria-label="Add Comment" icon={<FaPlus />} onClick={handleAddComment} ml={2} />
          </Flex>
        </FormControl>
        <Stack spacing={3}>
          {comments.map((comment) => (
            <Flex key={comment.id} p={4} borderWidth="1px" borderRadius="lg" alignItems="center" justifyContent="space-between">
              <Text>{comment.content}</Text>
              <Box>
                <IconButton aria-label="Edit Comment" icon={<FaEdit />} onClick={() => handleEditComment(comment)} mr={2} />
                <IconButton aria-label="Delete Comment" icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteComment(comment.id)} />
              </Box>
            </Flex>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
}

export default Comments;
