import styled from 'styled-components';

export const Container = styled.div`
  /* restringe área do conteúdo baseado no grid definido no layout */
  grid-area: CT;

  background-color: #e5e5e5 !important;

  padding: 20px 40px;

  /* define que terá scrollbar apenas para a área do content */
  overflow-y: auto;

  /* personalização da scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8a8a8a;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #b1b1b1;
  }
`;

export const InsideContent = styled.div``;
