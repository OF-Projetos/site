import { Box, Flex, Button, Stack, IconButton, useDisclosure, Link as ChakraLink } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <ChakraLink
    as={Link}
    to={to}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: 'brand.light',
    }}
  >
    {children}
  </ChakraLink>
);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="white" px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <ChakraLink as={Link} to="/" fontWeight="bold" fontSize="xl">
          OF Projetos 
        </ChakraLink>

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={4}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sobre">Sobre Nós</NavLink>
            <NavLink to="/servicos">Serviços</NavLink>
            <NavLink to="/portfolio">Portfólio</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </Stack>
        </Flex>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        pb={4}
      >
        <Stack as="nav" spacing={4}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sobre">Sobre Nós</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/portfolio">Portfólio</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header; 