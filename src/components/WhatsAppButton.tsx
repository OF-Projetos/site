import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número do WhatsApp da empresa (formato internacional)
    const phoneNumber = '5571992130500';
    const message = 'Olá! Gostaria de saber mais sobre os serviços da OF Projetos.';
    
    // URL do WhatsApp Web/App
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre em nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
    >
      <Tooltip
        label="Fale conosco no WhatsApp"
        placement="left"
        hasArrow
        bg="green.500"
        color="white"
      >
        <IconButton
          aria-label="WhatsApp"
          icon={<FaWhatsapp />}
          size="lg"
          bg="green.500"
          color="white"
          borderRadius="50%"
          width="60px"
          height="60px"
          fontSize="28px"
          boxShadow="0 4px 20px rgba(0,0,0,0.15)"
          transition="all 0.3s ease"
          _hover={{
            bg: 'green.600',
            transform: 'scale(1.1)',
            boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
          }}
          _active={{
            transform: 'scale(0.95)',
          }}
          onClick={handleWhatsAppClick}
        />
      </Tooltip>
    </Box>
  );
};

export default WhatsAppButton;
