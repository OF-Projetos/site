import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBuilding, FaHardHat, FaPencilRuler, FaTools } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  return (
    <Stack align="center" textAlign="center">
      <Icon as={icon} w={10} h={10} color="brand.primary" />
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
      <Text color="gray.600">{text}</Text>
    </Stack>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="brand.primary"
        color="white"
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="6xl">
          <Stack spacing={6} maxW="lg">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
            >
              Excelência em Engenharia Civil para o seu Projeto
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              Transformamos ideias em realidade com soluções inovadoras e sustentáveis para sua construção.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                as={RouterLink}
                to="/contato"
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'brand.secondary' }}
              >
                Solicite um Orçamento
              </Button>
              <Button
                as={RouterLink}
                to="/portfolio"
                size="lg"
                variant="outline"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Conheça Nossos Projetos
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="6xl">
          <Stack spacing={12}>
            <Stack spacing={4} textAlign="center">
              <Heading>Nossos Diferenciais</Heading>
              <Text color="gray.600" maxW="2xl" mx="auto">
                Oferecemos soluções completas em engenharia civil, desde o planejamento até a execução do seu projeto.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
              <Feature
                icon={FaBuilding}
                title="Projetos Estruturais"
                text="Desenvolvimento de projetos estruturais com as mais modernas tecnologias"
              />
              <Feature
                icon={FaHardHat}
                title="Gestão de Obras"
                text="Acompanhamento completo da execução com foco em qualidade e prazo"
              />
              <Feature
                icon={FaPencilRuler}
                title="Consultoria"
                text="Assessoria técnica especializada para otimização de processos construtivos"
              />
              <Feature
                icon={FaTools}
                title="Manutenção"
                text="Serviços de manutenção preventiva e corretiva para edificações"
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            align="center"
            justify="space-between"
            bg="brand.light"
            p={8}
            borderRadius="lg"
          >
            <Stack spacing={4} maxW="lg">
              <Heading size="lg">Pronto para Começar seu Projeto?</Heading>
              <Text color="gray.600">
                Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar no seu próximo projeto.
              </Text>
            </Stack>
            <Button
              as={RouterLink}
              to="/contato"
              size="lg"
              colorScheme="blue"
              px={8}
            >
              Fale Conosco
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 