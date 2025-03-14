import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactInfo = ({ icon, title, content }: { icon: any; title: string; content: React.ReactNode }) => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Box
        p={2}
        bg={useColorModeValue('brand.primary', 'brand.secondary')}
        color="white"
        borderRadius="lg"
      >
        <Icon as={icon} w={6} h={6} />
      </Box>
      <Stack spacing={0}>
        <Text fontWeight="bold">{title}</Text>
        {typeof content === 'string' ? (
          <Text color="gray.600">{content}</Text>
        ) : (
          content
        )}
      </Stack>
    </Stack>
  );
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();
  const toast = useToast();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Aqui você implementaria a lógica de envio do formulário
      console.log('Form data:', data);
      
      // Simulando um delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      reset();
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Por favor, tente novamente mais tarde.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.primary" color="white" py={20}>
        <Container maxW="6xl">
          <Stack spacing={6} maxW="xl">
            <Heading as="h1" size="2xl">
              Entre em Contato
            </Heading>
            <Text fontSize="xl">
              Estamos prontos para ajudar no seu próximo projeto.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Contact Form and Info */}
      <Box py={20}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
            {/* Contact Form */}
            <Stack spacing={8}>
              <Stack spacing={4}>
                <Heading size="lg">Envie uma Mensagem</Heading>
                <Text color="gray.600">
                  Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                </Text>
              </Stack>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input
                      {...register('name', { required: 'Nome é obrigatório' })}
                      placeholder="Seu nome completo"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      {...register('email', {
                        required: 'Email é obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido',
                        },
                      })}
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Telefone</FormLabel>
                    <Input
                      {...register('phone')}
                      placeholder="(11) 99999-9999"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Assunto</FormLabel>
                    <Input
                      {...register('subject', { required: 'Assunto é obrigatório' })}
                      placeholder="Assunto da mensagem"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea
                      {...register('message', { required: 'Mensagem é obrigatória' })}
                      placeholder="Sua mensagem"
                      rows={6}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    isLoading={isSubmitting}
                  >
                    Enviar Mensagem
                  </Button>
                </Stack>
              </form>
            </Stack>

            {/* Contact Info */}
            <Stack spacing={12}>
              <Stack spacing={4}>
                <Heading size="lg">Informações de Contato</Heading>
                <Text color="gray.600">
                  Entre em contato conosco através dos canais abaixo ou visite nosso escritório.
                </Text>
              </Stack>

              <Stack spacing={8}>
                <ContactInfo
                  icon={FaPhone}
                  title="Telefone"
                  content={
                    <Link href="tel:+551199999999" color="gray.600">
                      (11) 9999-9999
                    </Link>
                  }
                />

                <ContactInfo
                  icon={FaEnvelope}
                  title="Email"
                  content={
                    <Link href="mailto:contato@engenhariapro.com.br" color="gray.600">
                      contato@engenhariapro.com.br
                    </Link>
                  }
                />

                <ContactInfo
                  icon={FaMapMarkerAlt}
                  title="Endereço"
                  content={
                    <Stack spacing={0}>
                      <Text color="gray.600">Av. Principal, 1000</Text>
                      <Text color="gray.600">Centro - São Paulo/SP</Text>
                      <Text color="gray.600">CEP: 01000-000</Text>
                    </Stack>
                  }
                />

                <ContactInfo
                  icon={FaClock}
                  title="Horário de Funcionamento"
                  content={
                    <Stack spacing={0}>
                      <Text color="gray.600">Segunda a Sexta: 8h às 18h</Text>
                      <Text color="gray.600">Sábado: 9h às 13h</Text>
                    </Stack>
                  }
                />
              </Stack>

              {/* Google Maps Embed */}
              <Box
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                height="300px"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1440489534994!2d-46.65429388502164!3d-23.564611284681765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0e6074baa47!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647887829824!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 