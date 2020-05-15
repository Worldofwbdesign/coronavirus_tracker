import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import _ from 'lodash';

import styles from './StatsCards.module.css';

const colorMap = {
  confirmed: 'blue',
  deaths: 'red',
  recovered: 'green'
};

const StatsCards = ({ stats }) => (
  <div className={styles.root}>
    <Row gutter={16}>
      {Object.keys(stats).map(key => (
        <Col span={8} key={key}>
          <Card>
            <Statistic
              title={_.capitalize(key)}
              value={stats[key]}
              valueStyle={{ color: colorMap[key] }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default StatsCards;
