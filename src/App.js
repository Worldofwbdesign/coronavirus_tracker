import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import {
  Header,
  StatsCards,
  CountrySelect,
  GlobalChart,
  CountryChart
} from './components';
import { getCountriesStats, getGlobalStats } from './api';

import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const promise = selectedCountry
          ? getCountriesStats(selectedCountry)
          : getGlobalStats();
        const result = await promise.then(res => ({
          confirmed: res.confirmed.value,
          deaths: res.deaths.value,
          recovered: res.recovered.value
        }));
        setStats(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    };
    fetchData();
  }, [selectedCountry]);

  return (
    <div className={styles.root}>
      <Header />
      <Spin spinning={loading}>
        <StatsCards stats={stats} />
        <CountrySelect onChange={setSelectedCountry} />
        {selectedCountry ? <CountryChart stats={stats} /> : <GlobalChart />}
      </Spin>
    </div>
  );
}

export default App;
