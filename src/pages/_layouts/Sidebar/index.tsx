import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Menu from 'antd/es/menu';
import Tooltip from 'antd/es/tooltip';
import Button from 'antd/es/button';

import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  HomeOutlined,
  ScheduleOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import { useMenu } from '../../../hooks/menu';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { openMenu, handleOpenCloseMenu } = useMenu();

  const handleMenu = (): void => {
    handleOpenCloseMenu();
  };

  return (
    <Container>
      <div className='menu-content'>
        <div className='div-button-open-close'>
          <Tooltip
            placement='right'
            color='#1677ff'
            title={openMenu ? 'Recolher menu lateral' : 'Abrir menu lateral'}
            trigger='hover'>
            <Button type='primary' onClick={handleMenu}>
              {openMenu ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
            </Button>
          </Tooltip>
        </div>

        <Menu
          id='aside-menu-tour'
          mode='inline'
          selectedKeys={[location.pathname.replace(/\/+$/, '')]}>
          <Menu.Item key='/dashboard'>
            <Tooltip
              title={openMenu ? '' : 'Dashboard'}
              placement='right'
              color='#1677ff'>
              <Link to='/dashboard'>
                <HomeOutlined className='sibebar-icon' />
                <span className={openMenu ? 'link-name' : 'link-name-close'}>
                  Dashboard
                </span>
              </Link>
            </Tooltip>
          </Menu.Item>

          <Menu.Item key='/agendamento-de-consultas'>
            <Tooltip
              title={openMenu ? '' : 'Agendamento de consultas'}
              placement='right'
              color='#1677ff'>
              <Link to='/agendamento-de-consultas'>
                <ScheduleOutlined className='sibebar-icon' />
                <span className={openMenu ? 'link-name' : 'link-name-close'}>
                  Agendamento de consultas
                </span>
              </Link>
            </Tooltip>
          </Menu.Item>

          <Menu.Item key='/consulta-de-agendamentos'>
            <Tooltip
              title={openMenu ? '' : 'Consulta de agendamentos'}
              placement='right'
              color='#1677ff'>
              <Link to='/consulta-de-agendamentos'>
                <ContactsOutlined className='sibebar-icon' />
                <span className={openMenu ? 'link-name' : 'link-name-close'}>
                  Consulta de agendamentos
                </span>
              </Link>
            </Tooltip>
          </Menu.Item>
        </Menu>
      </div>
    </Container>
  );
};

export default Sidebar;
