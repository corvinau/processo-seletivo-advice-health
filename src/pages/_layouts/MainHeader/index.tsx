import React from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Avatar from 'antd/es/avatar';
import Image from 'antd/es/image';

import { UserOutlined } from '@ant-design/icons';

import { Container } from './styles';

const user = {
  firstName: 'Usuário',
  lastName: 'Teste',
  email: 'usuario@teste.com',
  imagemPerfil: '',
};

const MainHeader: React.FC = () => {
  return (
    <Container>
      <Row justify='space-between' className='header-row'>
        <Col className='logo'>
          <div>Advice Health</div>
        </Col>

        <Col>
          <Row justify='end' className='header-row'>
            <div className='header-information'>
              <div>Olá, {`${user.firstName} ${user.lastName}`}</div>
            </div>

            {user.imagemPerfil ? (
              <Avatar
                className='header-avatar'
                src={
                  <Image preview={false} src={user.imagemPerfil.toString()} />
                }
              />
            ) : (
              <Avatar className='header-avatar'>
                {!user.imagemPerfil && (
                  <strong>
                    <UserOutlined />
                  </strong>
                )}
              </Avatar>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHeader;
