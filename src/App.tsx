import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ConfigProvider from 'antd/es/config-provider';
import ptBR from 'antd/lib/locale/pt_BR';

import AppProvider from './hooks/index';

import LayoutComponent from './pages/_layouts';

import Dashboard from './pages/Dashboard';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <ConfigProvider locale={ptBR}>
        <AppProvider>
          <Router>
            <LayoutComponent>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
              </Routes>
            </LayoutComponent>
          </Router>
        </AppProvider>
      </ConfigProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
