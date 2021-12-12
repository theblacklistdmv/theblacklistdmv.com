import * as React from 'react';
import AppHeader from '../components/AppHeader';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const NotFoundPage: React.FC = () => {
  return (
    <AppLayout>
      <Seo title="404: Not Found" />
      <AppHeader />
      <div
        style={{
          textAlign: 'center',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <h1>404: Not Found</h1>
        <p>Our Apologies. We cannot find the page you're looking for.</p>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;
