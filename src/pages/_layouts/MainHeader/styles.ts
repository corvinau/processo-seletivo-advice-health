import styled from 'styled-components';

export const Container = styled.div`
  /* restringe área do cabeçalho baseado no grid definido no layout */
  grid-area: MH;

  background-color: #ffffff;
  border-bottom: 1px solid #c1c1c1;

  padding: 0 16px;

  .logo {
    display: flex;
    align-content: center;
    align-items: center;

    div {
      font-size: 20px;
    }
  }

  /* css para elementos do cabeçalho */
  .header-row {
    height: 60px;
  }

  .header-avatar {
    margin: 10px;
  }

  .header-information {
    align-self: center;
    margin: 0;

    div {
      font-size: 16px;
    }
  }

  .ant-avatar {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
`;