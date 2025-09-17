import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1" as="main">
        {children}
      </Box>
      <Footer />
      <WhatsAppButton />
    </Box>
  );
};

export default Layout; 