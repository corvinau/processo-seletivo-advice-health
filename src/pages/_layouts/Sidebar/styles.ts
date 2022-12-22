import styled from 'styled-components';

export const Container = styled.div`
  /* restringe área do menu lateral baseado no grid definido no layout */
  grid-area: SB;

  background-color: #ffffff;
  border-right: 1px solid #c1c1c1;

  position: relative;

  .div-button-open-close {
    top: 10px;
    right: 14px;
    position: absolute;
  }

  .menu-content {
    padding-top: 50px;

    /*define que terá scrollbar apenas quando o sidebar ultrapassar o tamanaho da tela visível */
    overflow-y: auto;

    /* personalização da scrollbar */
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #8a8a8a;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: #b1b1b1;
    }
  }

  .link-name {
    display: initial;
  }

  .link-name-close {
    display: none;
  }

  /* css para itens do menu lateral */
  .ant-menu-item {
    margin-top: 0px;
  }

  .sibebar-icon {
    font-size: 20px;
  }
`;
