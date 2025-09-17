import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHandshake, FaLightbulb, FaChartLine, FaLeaf } from 'react-icons/fa';
import LogoBackground from '../components/LogoBackground';

const Value = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  return (
    <Stack
      spacing={4}
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      boxShadow="md"
      height="100%"
    >
      <Icon as={icon} w={8} h={8} color="brand.primary" />
      <Heading size="md">{title}</Heading>
      <Text color="gray.600">{text}</Text>
    </Stack>
  );
};

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.primary" color="white" py={20} position="relative" overflow="hidden">
        <LogoBackground />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Stack spacing={6} maxW="xl">
            <Heading as="h1" size="2xl">
              Sobre Nós
            </Heading>
            <Text fontSize="xl">
              Há mais de 15 anos transformando sonhos em realidade através da engenharia civil.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* History Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <Stack spacing={12}>
            <Stack spacing={4}>
              <Heading>Nossa História</Heading>
              <Text color="gray.600" fontSize="lg">
                Fundada em 2019, a OF Projetos nasceu com o objetivo de oferecer soluções inovadoras
                e sustentáveis em engenharia civil. Ao longo dos anos, construímos uma reputação sólida
                baseada na excelência técnica, comprometimento com prazos e satisfação dos clientes.
              </Text>
              <Text color="gray.600" fontSize="lg">
                Nossa equipe é formada por profissionais altamente qualificados e especializados,
                sempre em constante atualização com as mais recentes tecnologias e práticas do mercado.
                Isso nos permite oferecer soluções personalizadas e eficientes para cada projeto.
              </Text>
            </Stack>

            {/* Mission, Vision Section */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Stack
                spacing={4}
                p={8}
                bg={useColorModeValue('gray.50', 'gray.800')}
                borderRadius="lg"
              >
                <Heading size="lg">Missão</Heading>
                <Text color="gray.600">
                  Desenvolver soluções em engenharia civil que superem as expectativas dos nossos
                  clientes, contribuindo para o desenvolvimento sustentável da sociedade através de
                  projetos inovadores e de alta qualidade.
                </Text>
              </Stack>
              <Stack
                spacing={4}
                p={8}
                bg={useColorModeValue('gray.50', 'gray.800')}
                borderRadius="lg"
              >
                <Heading size="lg">Visão</Heading>
                <Text color="gray.600">
                  Ser reconhecida como referência nacional em engenharia civil, destacando-se pela
                  inovação, sustentabilidade e excelência em todos os projetos realizados.
                </Text>
              </Stack>
            </SimpleGrid>

            {/* Values Section */}
            <Stack spacing={8}>
              <Heading textAlign="center">Nossos Valores</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                <Value
                  icon={FaHandshake}
                  title="Comprometimento"
                  text="Dedicação total aos nossos clientes e projetos, garantindo resultados excepcionais."
                />
                <Value
                  icon={FaLightbulb}
                  title="Inovação"
                  text="Busca constante por soluções criativas e tecnologias avançadas."
                />
                <Value
                  icon={FaChartLine}
                  title="Excelência"
                  text="Compromisso com os mais altos padrões de qualidade em todos os aspectos."
                />
                <Value
                  icon={FaLeaf}
                  title="Sustentabilidade"
                  text="Desenvolvimento de projetos com responsabilidade ambiental e social."
                />
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 