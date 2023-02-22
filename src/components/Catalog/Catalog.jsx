import React from 'react';
import { Container } from '../Container/Container';

import { Order } from './Order/Order';
import styles from './Catalog.module.css';
import { Product } from './Product/Product';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container className={styles.catalog__container}>
        <Order />

        <div className={styles.catalog__wrapper}>
          <h2 className={styles.catalog__title}>Бургеры</h2>

          <div className={styles.catalog__wrap_list}>
            <ul className={styles.catalog__list}>
              {goodsList.map((item, i) => (
                <li key={i} className={styles.catalog__item}>
                  <Product title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
