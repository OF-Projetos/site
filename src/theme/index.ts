import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#2C5282', // Deep blue
    secondary: '#E53E3E', // Red accent
    tertiary: '#2D3748', // Dark gray
    light: '#EDF2F7', // Light gray
  },
};

const fonts = {
  heading: '"Montserrat", sans-serif',
  body: '"Open Sans", sans-serif',
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
    },
    variants: {
      solid: {
        bg: 'brand.primary',
        color: 'white',
        _hover: {
          bg: 'brand.primary',
          opacity: 0.9,
        },
      },
      outline: {
        borderColor: 'brand.primary',
        color: 'brand.primary',
        _hover: {
          bg: 'brand.light',
        },
      },
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  components,
});

export default theme;