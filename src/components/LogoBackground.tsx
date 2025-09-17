import { Box } from '@chakra-ui/react';

const LogoBackground = () => {
  return (
    <Box
      position="absolute"
      right="20px"
      top="50%"
      transform="translateY(-50%)"
      opacity={0.08}
      zIndex={0}
      pointerEvents="none"
    >
      {/* Logo com opacidade para fundo */}
      <Box display="flex" alignItems="center" gap={4}>
        {/* Logo Icon */}
        <Box position="relative">
          <Box
            width="60px"
            height="60px"
            borderRadius="50%"
            bg="linear-gradient(135deg, #4A90E2 0%, #2C5282 50%, #1A365D 100%)"
            position="relative"
            boxShadow="0 4px 20px rgba(44, 82, 130, 0.3)"
          >
            {/* Highlight effect */}
            <Box
              position="absolute"
              top="20%"
              left="25%"
              width="30%"
              height="30%"
              borderRadius="50%"
              bg="rgba(255, 255, 255, 0.4)"
            />
            {/* Connecting line */}
            <Box
              position="absolute"
              bottom="15%"
              right="-6px"
              width="12px"
              height="2px"
              bg="#2C5282"
              borderRadius="1px"
            />
            <Box
              position="absolute"
              bottom="15%"
              right="-6px"
              width="2px"
              height="8px"
              bg="#2C5282"
              borderRadius="1px"
            />
          </Box>
        </Box>

        {/* Logo Text */}
        <Box>
          <Box
            fontSize="36px"
            fontWeight="bold"
            color="white"
            letterSpacing="1px"
            lineHeight="1"
            opacity={0.9}
          >
            OF
          </Box>
          <Box
            fontSize="36px"
            fontWeight="bold"
            color="white"
            letterSpacing="1px"
            lineHeight="1"
            opacity={0.9}
          >
            PROJETOS
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogoBackground;
