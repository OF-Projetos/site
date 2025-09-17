import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaBuilding,
  FaHardHat,
  FaPencilRuler,
  FaTools,
  FaHome,
  FaIndustry,
  FaRoad,
  FaWater,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import LogoBackground from '../components/LogoBackground';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <Stack
      spacing={4}
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      boxShadow="md"
      height="100%"
    >
      <Icon as={icon} w={10} h={10} color="brand.primary" />
      <Heading size="md">{title}</Heading>
      <Text color="gray.600">{description}</Text>
      <Stack spacing={2}>
        {features.map((feature, index) => (
          <Text key={index} color="gray.600" fontSize="sm">
            • {feature}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

const Services = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'Projetos Estruturais',
      description: 'Desenvolvimento de projetos estruturais com as mais modernas tecnologias e normas técnicas.',
      icon: FaBuilding,
      features: [
        'Análise estrutural avançada',
        'Dimensionamento otimizado',
        'Detalhamento completo',
        'Memorial de cálculo',
      ],
    },
    {
      title: 'Gestão de Obras',
      description: 'Gerenciamento completo de obras com foco em qualidade, prazo e custo.',
      icon: FaHardHat,
      features: [
        'Planejamento executivo',
        'Controle de cronograma',
        'Gestão de equipes',
        'Relatórios de progresso',
      ],
    },
    {
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada para otimização de processos construtivos.',
      icon: FaPencilRuler,
      features: [
        'Análise de viabilidade',
        'Otimização de projetos',
        'Perícias técnicas',
        'Laudos técnicos',
      ],
    },
    {
      title: 'Manutenção Predial',
      description: 'Serviços de manutenção preventiva e corretiva para edificações.',
      icon: FaTools,
      features: [
        'Inspeção predial',
        'Plano de manutenção',
        'Retrofit',
        'Adequações normativas',
      ],
    },
    {
      title: 'Projetos Residenciais',
      description: 'Desenvolvimento de projetos para residências e condomínios.',
      icon: FaHome,
      features: [
        'Casas unifamiliares',
        'Condomínios',
        'Reformas',
        'Ampliações',
      ],
    },
    {
      title: 'Projetos Industriais',
      description: 'Soluções completas para instalações industriais.',
      icon: FaIndustry,
      features: [
        'Galpões industriais',
        'Áreas de produção',
        'Instalações especiais',
        'Adequação normativa',
      ],
    },
    {
      title: 'Infraestrutura',
      description: 'Projetos de infraestrutura urbana e rodoviária.',
      icon: FaRoad,
      features: [
        'Pavimentação',
        'Drenagem',
        'Contenções',
        'Obras de arte',
      ],
    },
    {
      title: 'Saneamento',
      description: 'Projetos de sistemas de água e esgoto.',
      icon: FaWater,
      features: [
        'Redes de água',
        'Redes de esgoto',
        'Estações de tratamento',
        'Reservatórios',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.primary" color="white" py={20} position="relative" overflow="hidden">
        <LogoBackground />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <Stack spacing={6} maxW="xl">
            <Heading as="h1" size="2xl">
              Nossos Serviços
            </Heading>
            <Text fontSize="xl">
              Soluções completas em engenharia civil para todos os tipos de projetos.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box py={20}>
        <Container maxW="6xl">
          <Stack spacing={12}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </SimpleGrid>

            {/* CTA Section */}
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={8}
              align="center"
              justify="center"
              bg="brand.light"
              p={8}
              borderRadius="lg"
              mt={12}
            >
              <Text fontSize="lg" fontWeight="bold" textAlign="center">
                Precisa de algum serviço específico?
              </Text>
              <Button
                as={RouterLink}
                to="/contato"
                size="lg"
                colorScheme="blue"
                px={8}
              >
                Entre em Contato
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Services; 