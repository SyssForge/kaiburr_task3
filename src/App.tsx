import React from 'react';
import 'antd/dist/reset.css';
import { Layout, Typography, theme } from 'antd';
import Dashboard from './pages/Dashboard';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, colorTextBase },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh', background: colorBgContainer }}>
      <Header
        style={{
          background: '#1677ff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Typography.Title
          level={2}
          style={{
            color: '#fff',
            margin: 0,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          Kaiburr Task Manager Dashboard
        </Typography.Title>
      </Header>

      <Content
        style={{
          padding: '32px 60px',
          color: colorTextBase,
          background: colorBgContainer,
        }}
      >
        <Dashboard />
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          background: '#f5f5f5',
          fontSize: '14px',
          color: '#888',
        }}
      >
        © {new Date().getFullYear()} Kaiburr Assessment | Built by Sarayu
      </Footer>
    </Layout>
  );
};

export default App;
