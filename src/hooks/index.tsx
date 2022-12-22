import React from 'react';

import { MenuProvider } from './menu';

/**
 * Componente que junta os providers presentes na aplicação
 */
const AppProvider: React.FC<IDefautContext> = ({ children }) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export default AppProvider;
