import React from 'react';
import { Goods } from './Goods/Goods';
import styles from './Order.module.css';

const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];

export const Order = () => {
  return (
    <div className={styles.order}>
      <section className={styles.order__wrapper}>
        <div className={styles.order__header} tabIndex="0" role="button">
          <h2 className={styles.order__title}>Корзина</h2>

          <span className={styles.order__count}>4</span>
        </div>

        <div className={styles.order__wrap_list}>
          <ul className={styles.order__list}>
            {orderList.map((item, i) => (
              <Goods key={i} item={item} />
            ))}
          </ul>

          <div className={styles.order__total}>
            <p>Итого</p>
            <p>
              <span className={styles.order__amount}>1279</span>
              <span className={styles.currency}>₽</span>
            </p>
          </div>

          <button className={styles.order__submit}>Оформить заказ</button>

          <div className={styles.order__apeal}>
            <p className={styles.order__text}>Бесплатная доставка</p>
            <button className={styles.order__close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
