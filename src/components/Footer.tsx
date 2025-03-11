import { Box, Container, Stack, Text, Link, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>Empresa</Text>
            <Link href="/sobre">Sobre Nós</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/portfolio">Portfólio</Link>
            <Link href="/contato">Contato</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>Serviços</Text>
            <Link href="/servicos">Projetos Estruturais</Link>
            <Link href="/servicos">Consultoria</Link>
            <Link href="/servicos">Gestão de Obras</Link>
            <Link href="/servicos">Laudos Técnicos</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>Contato</Text>
            <Text>Telefone: (11) 1234-5678</Text>
            <Text>Email: contato@engenhariapro.com.br</Text>
            <Text>Endereço: Av. Principal, 1000</Text>
            <Text>São Paulo - SP</Text>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>Redes Sociais</Text>
            <Stack direction="row" spacing={6}>
              <Link href="#" isExternal>
                <FaFacebook size="24px" />
              </Link>
              <Link href="#" isExternal>
                <FaTwitter size="24px" />
              </Link>
              <Link href="#" isExternal>
                <FaLinkedin size="24px" />
              </Link>
              <Link href="#" isExternal>
                <FaInstagram size="24px" />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.700')} pt={8} mt={8}>
          <Text textAlign="center">
            © {new Date().getFullYear()} EngenhariaPro. Todos os direitos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 