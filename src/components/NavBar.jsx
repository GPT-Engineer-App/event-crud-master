import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NavBar() {
  return (
    <Flex as="nav" bg="blue.500" color="white" padding="4" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" px="2">Home</Link>
        <Link as={RouterLink} to="/comments" px="2">Comments</Link>
      </Box>
    </Flex>
  );
}

export default NavBar;