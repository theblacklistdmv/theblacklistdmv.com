import * as React from 'react';
import { Container } from 'react-bootstrap';
import AppFooter from './AppFooter';
import AppNavbar from './AppNavbar';
import AppHeader from './AppHeader';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <AppNavbar />
        <AppHeader />
      </header>
      <Container>
        <main>{children}</main>
        <footer>
          <AppFooter />
        </footer>
      </Container>
    </>
  );
};

export default AppLayout;
