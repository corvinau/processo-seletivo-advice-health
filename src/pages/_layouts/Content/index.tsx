import React from 'react';

import { Container, InsideContent } from './styles';

const Content: React.FC<IDefautContext> = ({ children }) => {
  return (
    <Container>
      <InsideContent>{children}</InsideContent>
    </Container>
  );
};

export default Content;
