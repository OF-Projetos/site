import { Box, Text } from '@chakra-ui/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { iconSize: '24px', textSize: 'sm' },
    md: { iconSize: '32px', textSize: 'lg' },
    lg: { iconSize: '40px', textSize: 'xl' }
  };

  const { iconSize, textSize } = sizes[size];

  return (
    <Box display="flex" alignItems="center" gap={3}>
      {/* Logo Icon */}
      <Box position="relative">
        <Box
          width={iconSize}
          height={iconSize}
          borderRadius="50%"
          bg="linear-gradient(135deg, #4A90E2 0%, #2C5282 50%, #1A365D 100%)"
          position="relative"
          boxShadow="0 2px 8px rgba(44, 82, 130, 0.3)"
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
            right="-8px"
            width="12px"
            height="2px"
            bg="#2C5282"
            borderRadius="1px"
          />
          <Box
            position="absolute"
            bottom="15%"
            right="-8px"
            width="2px"
            height="8px"
            bg="#2C5282"
            borderRadius="1px"
          />
        </Box>
      </Box>

      {/* Logo Text */}
      {showText && (
        <Text
          fontSize={textSize}
          fontWeight="bold"
          color="brand.primary"
          letterSpacing="0.5px"
        >
          OF PROJETOS
        </Text>
      )}
    </Box>
  );
};

export default Logo;
