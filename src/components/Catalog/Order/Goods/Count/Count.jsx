import React, { useState } from 'react';
import styles from './Count.module.css';

export const Count = (props) => {
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  };
  const deletCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.count}>
      <button className={styles.count__minus} onClick={deletCount} disabled={count === 1}>
        -
      </button>
      <p className={styles.count__amount}>{count}</p>
      <button className={styles.count__plus} onClick={addCount}>
        +
      </button>
    </div>
  );
};
