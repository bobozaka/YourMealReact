import React from 'react';
import styles from './Product.module.css';

export const Product = (props) => (
  <article className={styles.product}>
    <img src="img/photo-5.jpg" alt={props.title} className={styles.product__image} />

    <p className={styles.product__price}>
      689<span className="currency">₽</span>
    </p>

    <h3 className={styles.product__title}>
      <button className={styles.product__detail}>{props.title}</button>
    </h3>

    <p className={styles.product__weight}>520г</p>

    <button className={styles.product__add} type="button">
      Добавить
    </button>
  </article>
);
