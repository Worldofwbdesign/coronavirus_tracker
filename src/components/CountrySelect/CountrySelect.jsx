import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { getCountriesList } from '../../api';

import styles from './CountrySelect.module.css';

const CountrySelect = ({ onChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { countries } = await getCountriesList();
      setCountries(countries);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.root}>
      <Select
        allowClear
        placeholder="Select country"
        className={styles.select}
        onChange={onChange}
      >
        {countries
          .filter(c => c.iso3)
          .map(c => (
            <Select.Option key={c.iso3}>{c.name}</Select.Option>
          ))}
      </Select>
    </div>
  );
};

export default CountrySelect;
