import React from 'react';
import { Container } from '../Container/Container';
import styles from './Catalog.module.css';

import Bomba from '../../assets/img/photo-5.jpg';
import Chees from '../../assets/img/photo-1.jpg';
import Satisfying from '../../assets/img/photo-3.jpg';
import Heavy from '../../assets/img/photo.jpg';
import Classic from '../../assets/img/photo-2.jpg';
import Italian from '../../assets/img/photo-4.jpg';
import { Order } from './Order/Order';

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container className={styles.catalog__container}>
        <Order />

        <div className={styles.catalog__wrapper}>
          <h2 className={styles.catalog__title}>Бургеры</h2>

          <div className={styles.catalog__wrap_list}>
            <ul className={styles.catalog__list}>
              <li className={styles.catalog__item}>
                <article className={styles.product}>
                  <img src={Bomba} alt="Мясная бомба" className={styles.product__image} />

                  <p className={styles.product__price}>
                    689<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>Мясная бомба</button>
                  </h3>

                  <p className={styles.product__weight}>520г</p>

                  <button className={styles.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.catalog__item}>
                <article className={styles.product}>
                  <img src={Chees} alt="Супер сырный" className={styles.product__image} />

                  <p className={styles.product__price}>
                    550<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>Супер сырный</button>
                  </h3>

                  <p className={styles.product__weight}>512г</p>

                  <button className={styles.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.catalog__item}>
                <article className={styles.product}>
                  <img src={Satisfying} alt="Сытный" className={styles.product__image} />

                  <p className={styles.product__price}>
                    639<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>Сытный</button>
                  </h3>

                  <p className={styles.product__weight}>580г</p>

                  <button className={styles.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.catalog__item}>
                <article className={styles.product}>
                  <img src={Heavy} alt="Тяжелый удар" className={styles.product__image} />

                  <p className={styles.product__price}>
                    480<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>Тяжелый удар</button>
                  </h3>

                  <p className={styles.product__weight}>470г</p>

                  <button className={styles.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.catalog__item}>
                <article className={styles.product}>
                  <img src={Classic} alt="Вечная классика" className={styles.product__image} />

                  <p className={styles.product__price}>
                    450<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>Вечная классика</button>
                  </h3>

                  <p className={styles.product__weight}>450г</p>

                  <button className={styles.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.catalog__item}>
                <article className={styles.product}>
                  <img src={Italian} alt="Итальянский" className={styles.product__image} />

                  <p className={styles.product__price}>
                    560<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>Итальянский</button>
                  </h3>

                  <p className={styles.product__weight}>510г</p>

                  <button className={styles.product__add} type="button">
                    Добавить
                  </button>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
