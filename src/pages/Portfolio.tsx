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
    title: 'Edifício Comercial Skyline',
    description: 'Projeto estrutural e execução de edifício comercial com 20 pavimentos, incluindo 3 subsolos.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Comercial',
    tags: ['Estrutural', 'Alto Padrão', 'Sustentável'],
    location: 'São Paulo - SP',
    year: 2022,
  },
  {
    id: 2,
    title: 'Condomínio Residencial Verde Vale',
    description: 'Desenvolvimento completo de condomínio residencial com 200 unidades e área de lazer.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Residencial',
    tags: ['Condomínio', 'Área Verde', 'Lazer'],
    location: 'Campinas - SP',
    year: 2021,
  },
  {
    id: 3,
    title: 'Centro de Distribuição LogisTech',
    description: 'Projeto e execução de galpão logístico com 50.000m² de área construída.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Industrial',
    tags: ['Logística', 'Grande Porte', 'Automação'],
    location: 'Guarulhos - SP',
    year: 2023,
  },
  {
    id: 4,
    title: 'Hospital Regional Santa Clara',
    description: 'Consultoria técnica e gerenciamento da construção de complexo hospitalar.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Saúde',
    tags: ['Hospitalar', 'Complexo', 'Especializado'],
    location: 'Ribeirão Preto - SP',
    year: 2022,
  },
  {
    id: 5,
    title: 'Shopping Center Plaza Mall',
    description: 'Projeto estrutural e acompanhamento de obra de centro comercial com 45.000m².',
    image: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Comercial',
    tags: ['Shopping', 'Varejo', 'Entretenimento'],
    location: 'Santos - SP',
    year: 2023,
  },
  {
    id: 6,
    title: 'Ponte Rio Verde',
    description: 'Projeto e supervisão da construção de ponte rodoviária com 500m de extensão.',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Infraestrutura',
    tags: ['Ponte', 'Rodoviário', 'Estrutural'],
    location: 'Sorocaba - SP',
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
      <Box bg="brand.primary" color="white" py={20}>
        <Container maxW="6xl">
          <Stack spacing={6} maxW="xl">
            <Heading as="h1" size="2xl">
              Nosso Portfólio
            </Heading>
            <Text fontSize="xl">
              Conheça alguns dos nossos principais projetos e realizações.
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
                {['all', 'Comercial', 'Residencial', 'Industrial', 'Infraestrutura', 'Saúde'].map(
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