import React from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Input from 'antd/es/input';
import Table from 'antd/es/table';
import Button from 'antd/es/button';

import type { ColumnsType } from 'antd/es/table';

import { EditOutlined, SearchOutlined } from '@ant-design/icons';

import { Container } from './styles';

const { Search } = Input;

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  doctor: string;
  value: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nome do paciente',
    dataIndex: 'name',
  },
  {
    title: 'Data do agendamento',
    dataIndex: 'date',
  },
  {
    title: 'Médico',
    dataIndex: 'doctor',
  },
  {
    title: 'Valor da consulta',
    dataIndex: 'value',
  },
  {
    dataIndex: 'actions',
    render: (): React.ReactNode => {
      return (
        <>
          <Button
            type='primary'
            className='actions-edit'
            icon={<EditOutlined />}
          />
          <Button type='primary' icon={<SearchOutlined />} />
        </>
      );
    },
  },
];

const dataTable: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '2',
    name: 'Jim Green',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '3',
    name: 'Joe Black',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '4',
    name: 'Disabled User',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '5',
    name: 'Joe Black',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '6',
    name: 'Disabled User',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '7',
    name: 'Joe Black',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '8',
    name: 'John Brown',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '9',
    name: 'Jim Green',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '10',
    name: 'Joe Black',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '11',
    name: 'Disabled User',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '12',
    name: 'Joe Black',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '13',
    name: 'Disabled User',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '14',
    name: 'Joe Black',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
  {
    key: '15',
    name: 'Joe Black',
    date: '23/12/2022',
    doctor: 'Doctor Who',
    value: '100,00',
  },
];

const Schedules: React.FC = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Container>
      <Row className='schedules-panel'>
        <Col span={24}>
          <Row className='schedules-search'>
            <Search
              placeholder='Busca rápida'
              size='large'
              onSearch={onSearch}
              enterButton
            />
          </Row>

          <Table columns={columns} dataSource={dataTable} />
        </Col>
      </Row>
    </Container>
  );
};

export default Schedules;
