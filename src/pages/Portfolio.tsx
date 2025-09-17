import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Tag,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import LogoBackground from '../components/LogoBackground';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  location: string;
  year: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Reforma Completa - Edifício Comercial 3º Andar',
    description: 'Execução completa de reforma interna incluindo instalação de drywall, acabamentos em massa corrida e preparação de superfícies para pintura final.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Comercial',
    tags: ['Drywall', 'Acabamentos', 'Reforma'],
    location: 'Salvador - BA',
    year: 2023,
  },
  {
    id: 2,
    title: 'Reforma de Escadaria - Edifício Residencial',
    description: 'Renovação completa de escadaria com aplicação de massa corrida nos espelhos, preparação de superfícies e acabamentos finais.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Residencial',
    tags: ['Escadaria', 'Acabamentos', 'Renovação'],
    location: 'Salvador - BA',
    year: 2023,
  },
  {
    id: 3,
    title: 'Instalação de Esquadrias - Projeto Comercial',
    description: 'Instalação de esquadrias de janela com estrutura metálica, preparação de aberturas e integração com instalações hidráulicas.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Comercial',
    tags: ['Esquadrias', 'Estrutural', 'Instalações'],
    location: 'Salvador - BA',
    year: 2023,
  },
  {
    id: 4,
    title: 'Acabamento de Alto Padrão - Hall de Entrada',
    description: 'Execução de acabamentos internos com piso de madeira polida, iluminação LED embutida e acabamentos de parede em alto padrão.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Comercial',
    tags: ['Alto Padrão', 'Piso Madeira', 'Iluminação'],
    location: 'Salvador - BA',
    year: 2023,
  },
  {
    id: 5,
    title: 'Projeto Concluído - Corredor Comercial',
    description: 'Finalização de projeto de corredor comercial com instalação de luminárias LED, acabamentos de parede e organização de instalações elétricas.',
    image: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Comercial',
    tags: ['Concluído', 'LED', 'Elétrica'],
    location: 'Salvador - BA',
    year: 2023,
  },
  {
    id: 6,
    title: 'Instalação Elétrica - Medidores de Energia',
    description: 'Instalação e padronização de caixas de medidores de energia elétrica com organização de fiação e conformidade com normas técnicas.',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Infraestrutura',
    tags: ['Elétrica', 'Medidores', 'Normas'],
    location: 'Salvador - BA',
    year: 2021,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderRadius="lg"
        overflow="hidden"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="md"
        cursor="pointer"
        onClick={onOpen}
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.02)' }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width="100%"
          height="250px"
          objectFit="cover"
        />
        <Box p={6}>
          <Stack spacing={3}>
            <Heading size="md">{project.title}</Heading>
            <Text color="gray.600" noOfLines={2}>
              {project.description}
            </Text>
            <Stack direction="row" spacing={2}>
              {project.tags.map((tag) => (
                <Tag key={tag} colorScheme="blue" size="sm">
                  {tag}
                </Tag>
              ))}
            </Stack>
            <Text fontSize="sm" color="gray.500">
              {project.location} • {project.year}
            </Text>
          </Stack>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image
              src={project.image}
              alt={project.title}
              width="100%"
              height="400px"
              objectFit="cover"
              borderRadius="md"
              mb={4}
            />
            <Stack spacing={4}>
              <Text>{project.description}</Text>
              <Stack direction="row" spacing={2}>
                {project.tags.map((tag) => (
                  <Tag key={tag} colorScheme="blue" size="md">
                    {tag}
                  </Tag>
                ))}
              </Stack>
              <Stack spacing={2}>
                <Text>
                  <strong>Localização:</strong> {project.location}
                </Text>
                <Text>
                  <strong>Ano:</strong> {project.year}
                </Text>
                <Text>
                  <strong>Categoria:</strong> {project.category}
                </Text>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.primary" color="white" py={20} position="relative" overflow="hidden">
        <LogoBackground />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Stack spacing={6} maxW="xl">
            <Heading as="h1" size="2xl">
              Nosso Portfólio
            </Heading>
            <Text fontSize="xl">
              Conheça nossos projetos reais de reformas, acabamentos e instalações elétricas executados com excelência técnica.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Portfolio Grid */}
      <Box py={20}>
        <Container maxW="6xl">
          <Stack spacing={12}>
            <Stack spacing={4}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                justify="center"
                wrap="wrap"
              >
                {['all', 'Comercial', 'Residencial', 'Infraestrutura'].map(
                  (category) => (
                    <Tag
                      key={category}
                      size="lg"
                      variant={filter === category ? 'solid' : 'outline'}
                      colorScheme="blue"
                      cursor="pointer"
                      onClick={() => setFilter(category)}
                    >
                      {category === 'all' ? 'Todos' : category}
                    </Tag>
                  )
                )}
              </Stack>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio; 