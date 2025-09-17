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
    title: 'Reforma Completa - Edifício Hospitalar 3º Andar',
    description: 'Execução completa de reforma interna incluindo instalação de drywall, acabamentos em massa corrida e preparação de superfícies para pintura final.',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOfx9e6C-MWlWnqM26eNMxfsKv3kkADwZKIff7pZdRRwlpX8ZkLGyEL3ZZ7cJu74vbzTEkplLeYbdmMmO3s6XPFi1cet1EHl-MwmMV-dyVAkhOzB-Q3vmh7qUcygidatnwCuBmHKtRmEwiej9oQaTzwgQ=w430-h931-s-no-gm?authuser=0',
    category: 'Hospitalar',
    tags: ['Drywall', 'Acabamentos', 'Reforma'],
    location: 'Salvador - BA',
    year: 2025,
  },
  {
    id: 2,
    title: 'Reforma de Escadaria - Hospitalar norma de segurança ',
    description: 'Norma de segurança implementada em escadaria hospitalar',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNGRM_fkgZqTKFRq8GhozS7tvHb0xWJ_K7JwgAx=s1360-w1360-h1020-rw',
    category: 'Normas Técnicas',
    tags: ['Escadaria', 'Acabamentos', 'Renovação'],
    location: 'Salvador - BA',
    year: 2025,
  },
  {
    id: 3,
    title: 'Instalação de Esquadrias - Projeto Hospitalar',
    description: 'Instalação de esquadrias de janela com estrutura metálica, preparação de aberturas e integração com instalações hidráulicas.',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMS8riRJYiItRkIZRJOZsCe4L2TX-Ml1gV-dzcCMDVgXJkJQ2NHxw0oCquhBMeMjseDzopB0PuyhaZOxAGiOHTjuNgvgIW2gVmeKFSmmBwb2k3qbpqFblwfhFg3nSZWsist-sTwa3yZ39cW6sUQnn8m_A=w430-h931-s-no-gm?authuser=0',
    category: 'Hospitalar',
    tags: ['Esquadrias', 'Estrutural', 'Instalações'],
    location: 'Salvador - BA',
    year: 2024,
  },
  {
    id: 4,
    title: 'Supervisão e acompanhamento blidagem - Verniz Antichama',
    description: 'Execução de acabamentos Norma Regulamentadora 32 (NR-32), pintura e verniz antichama.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNRxpunw0RoinNVMNTMQzYkQM927qo1ouEsShrv=s1360-w1360-h1020-rw',
    category: 'Hospitalar',
    tags: ['blidagem', 'Piso Madeira', 'Verniz'],
    location: 'Salvador - BA',
    year: 2025,
  },
  {
    id: 5,
    title: 'Projeto Concluído - Corredor Hospitalar',
    description: 'Finalização de projeto de corredor Hospitalar com instalação de luminárias, acabamentos de parede e organização de instalações elétricas.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipM9uRwGnQ7H2QvEEx5YZjZGulfOHYqmva9Q-aKs=s1360-w1360-h1020-rw',
    category: 'Hospitalar',
    tags: ['Concluído', 'LED', 'Elétrica'],
    location: 'Salvador - BA',
    year: 2023,
  },
  {
    id: 6,
    title: 'Instalação Elétrica - Medidores de Energia',
    description: 'Instalação e padronização de caixas de medidores de energia elétrica com organização de fiação e conformidade com normas técnicas.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipP53fH1sU6m0wnjTl-qeexGnuMNwDmPu1cLdA9i=s1360-w1360-h1020-rw',
    category: 'Infraestrutura',
    tags: ['Elétrica', 'Medidores', 'Normas'],
    location: 'Salvador - BA',
    year: 2022,
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
                {['all', 'Hospitalar', 'Normas Técnicas', 'Infraestrutura'].map(
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