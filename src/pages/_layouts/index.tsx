import React, { useMemo } from 'react';

import { useMenu } from '../../hooks/menu';

import MainHeader from './MainHeader';
import Sibebar from './Sidebar';
import Content from './Content';

import { Layout } from './styles';

const LayoutComponent: React.FC<IDefautContext> = ({ children }) => {
  const { openMenu } = useMenu();

  const gridTemplateColumns = useMemo(() => {
    return openMenu ? '250px auto' : '75px auto';
  }, [openMenu]);

  return (
    <Layout style={{ gridTemplateColumns }}>
      <MainHeader />
      <Sibebar />
      <Content>{children}</Content>
    </Layout>
  );
};

export default LayoutComponent;
