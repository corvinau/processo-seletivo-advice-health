import React, { useEffect, useState } from 'react';

import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Calendar from 'antd/es/calendar';
import Avatar from 'antd/es/avatar';
import List from 'antd/es/list';
import message from 'antd/es/message';
import Card from 'antd/es/card';
import Button from 'antd/es/button';

import VirtualList from 'rc-virtual-list';

import dayjs from 'dayjs';

import 'dayjs/locale/pt-br';

import type { Dayjs } from 'dayjs';

import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';

import { Container } from './styles';

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

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 470;

const AppointmentBook: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);
  const [value, setValue] = useState(() => dayjs(new Date()).locale('pt-br'));
  const [selectedValue, setSelectedValue] = useState(() =>
    dayjs(new Date()).locale('pt-br')
  );

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

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Row className='appointment-panel'>
        <Col span={6}>
          <Row className='appointment-list-name'>Médicos</Row>

          <Row className='appointment-list-row'>
            <Col className='appointment-list'>
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

          <Row>
            <Col>
              <Calendar
                fullscreen={false}
                value={value}
                onSelect={onSelect}
                onPanelChange={onPanelChange}
              />
            </Col>
          </Row>
        </Col>

        <Col className='vertical-divider' />

        <Col span={17}>
          <Row className='appointment-date'>{`${selectedValue?.format(
            'DD MMMM YYYY'
          )}`}</Row>

          <Row>
            <Card className='appointment-cards'>
              <div className='appointment-details'>
                <div className='appointment-hour'>08:00</div>
                <div className='appointment-patient'>Nome do paciente</div>
                <div className='appointment-action'>
                  <Button type='primary' icon={<ScheduleOutlined />} />
                  <Button type='primary' icon={<DeleteOutlined />} />
                  <Button type='primary' icon={<EditOutlined />} />
                </div>
              </div>
            </Card>

            <Card className='appointment-cards'>
              <div className='appointment-details'>
                <div className='appointment-hour'>08:30</div>
                <div className='appointment-patient'></div>
                <div className='appointment-action'>
                  <Button type='primary' icon={<PlusOutlined />} />
                </div>
              </div>
            </Card>

            <Card className='appointment-cards'>
              <div className='appointment-details'>
                <div className='appointment-hour'>09:00</div>
                <div className='appointment-patient'></div>
                <div className='appointment-action'>
                  <Button type='primary' icon={<PlusOutlined />} />
                </div>
              </div>
            </Card>

            <Card className='appointment-cards'>
              <div className='appointment-details'>
                <div className='appointment-hour'>09:30</div>
                <div className='appointment-patient'></div>
                <div className='appointment-action'>
                  <Button type='primary' icon={<PlusOutlined />} />
                </div>
              </div>
            </Card>

            <Card className='appointment-cards'>
              <div className='appointment-details'>
                <div className='appointment-hour'>10:00</div>
                <div className='appointment-patient'></div>
                <div className='appointment-action'>
                  <Button type='primary' icon={<PlusOutlined />} />
                </div>
              </div>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentBook;
