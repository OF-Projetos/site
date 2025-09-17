import { Box, Container, Stack, Text, Link as ChakraLink, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

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
            <ChakraLink as={RouterLink} to="/sobre">Sobre Nós</ChakraLink>
            <ChakraLink as={RouterLink} to="/servicos">Serviços</ChakraLink>
            <ChakraLink as={RouterLink} to="/portfolio">Portfólio</ChakraLink>
            <ChakraLink as={RouterLink} to="/contato">Contato</ChakraLink>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>Serviços</Text>
            <ChakraLink as={RouterLink} to="/servicos">Projetos Estruturais</ChakraLink>
            <ChakraLink as={RouterLink} to="/servicos">Consultoria</ChakraLink>
            <ChakraLink as={RouterLink} to="/servicos">Gestão de Obras</ChakraLink>
            <ChakraLink as={RouterLink} to="/servicos">Laudos Técnicos</ChakraLink>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>Contato</Text>
            <Text>Telefone: (71) 99213-0500</Text>
            <Text>Email: ofprojetos21@gmail.com</Text>
            <Text>Endereço: Loteamento - Granjas Rurais Pres. Vargas, Salvador - BA, 41230-000</Text>
            <Text>Salvador - BA</Text>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize="lg" mb={2}>Redes Sociais</Text>
            <Stack direction="row" spacing={6}>
              <ChakraLink href="mailto:ofprojetos21@gmail.com" isExternal>
                <FaEnvelope size="24px" />
              </ChakraLink>
              <ChakraLink href="https://wa.me/5571992130500" isExternal>
                <FaWhatsapp size="24px" />
              </ChakraLink>
              <ChakraLink href="https://www.linkedin.com/company/of-projetos/" isExternal>
                <FaLinkedin size="24px" />
              </ChakraLink>
              <ChakraLink href="https://www.instagram.com/ofprojetos/" isExternal>
                <FaInstagram size="24px" />
              </ChakraLink>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.700')} pt={8} mt={8}>
          <Text textAlign="center">
            © {new Date().getFullYear()} OF Projetos. Todos os direitos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 