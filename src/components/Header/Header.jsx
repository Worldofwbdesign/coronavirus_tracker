import React from 'react';
import { ReactComponent as Icon } from './coronavirus.svg';

import styles from './Header.module.css';

const Header = () => {
  return (
    <h1 className={styles.root}>
      Cor
      <Icon className={styles.icon} />
      navirus Statistics
    </h1>
  );
};

export default Header;
