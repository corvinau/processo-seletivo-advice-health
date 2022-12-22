import React, { useEffect, useState } from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Calendar from 'antd/es/calendar';
import Avatar from 'antd/es/avatar';
import List from 'antd/es/list';
import message from 'antd/es/message';
import Input from 'antd/es/input';
import Card from 'antd/es/card';
import Table from 'antd/es/table';

import VirtualList from 'rc-virtual-list';

import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { ColumnsType } from 'antd/es/table';

import { Container } from './styles';

const { Search } = Input;

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 470;

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const dataTable: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const Dashboard: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  const onSearch = (value: string) => console.log(value);

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <Container>
      <Row className='dashboard-panel'>
        <Col span={17}>
          <Row className='dashboard-search'>
            <Search
              placeholder='Busca'
              size='large'
              onSearch={onSearch}
              enterButton
            />
          </Row>

          <Row className='dashboard-title'>Dashboard</Row>

          <div className='dashboard-statistics'>
            <Row>
              <Col span={8}>
                <Card
                  title='Número de atendimentos marcados no dia'
                  className='statistic-attendance'>
                  <p>80 pacientes</p>
                </Card>
              </Col>

              <Col span={8}>
                <Card
                  title='Número de pacientes atendidos'
                  className='statistic-patient'>
                  <p>20 pacientes</p>
                </Card>
              </Col>

              <Col span={8}>
                <Card title='Faturamento do dia' className='statistic-billing'>
                  <p>R$ 2.000,00</p>
                </Card>
              </Col>
            </Row>
          </div>

          <Row className='dashboard-title'>Avisos / Lembretes</Row>

          <Table columns={columns} dataSource={dataTable} />
        </Col>

        <Col className='vertical-divider' />

        <Col span={6}>
          <Row className='dashboard-calendar'>
            <Col>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </Col>
          </Row>

          <Row className='dashboard-list-name'>Agenda do dia</Row>

          <Row className='dashboard-list-row'>
            <Col className='dashboard-list'>
              <List>
                <VirtualList
                  data={data}
                  height={ContainerHeight}
                  itemHeight={47}
                  itemKey='email'
                  onScroll={onScroll}>
                  {(item: UserItem) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={item.name.last}
                        description={item.email}
                      />
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
