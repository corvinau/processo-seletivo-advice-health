import styled from 'styled-components';

/**
 * Layout
 * MH = MainHeader
 * SB = Sidebar
 * CT = Content
 */
export const Layout = styled.div`
  display: grid;
  grid-template-rows: 60px auto;

  /* definição das áreas do grid do template */
  grid-template-areas:
    'MH MH'
    'SB CT';

  height: 100vh;

  overflow: hidden;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 100% !important;
    grid-template-rows: 60px auto;

    /* definição das áreas do grid do template */
    grid-template-areas:
      'MH'
      'CT';
  }
`;

export const InnerPage = styled.div`
  padding: 24px 24px 40px 24px;
`;
