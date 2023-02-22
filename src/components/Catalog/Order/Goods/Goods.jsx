import React from 'react';
import { Count } from './Count/Count';
import styles from './Goods.module.css';

export const Goods = ({ item, i }) => {
  return (
    <li  className={styles.order__item}>
      <img className={styles.order__image} src="img/photo-2" alt={item} />

      <div className={styles.goods}>
        <h3 className={styles.goods__title}>{item}</h3>

        <p className={styles.goods__weight}>512г</p>

        <p className={styles.goods__price}>
          1279
          <span className="currency">₽</span>
        </p>
      </div>
      <Count count={1} />
    </li>
  );
};
