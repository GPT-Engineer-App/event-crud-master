import React, { useState } from "react";
import { Box, Button, Container, Input, VStack, Heading } from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      onLogin(true);
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="blue" onClick={handleLogin}>
          Log In
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
