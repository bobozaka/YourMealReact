import React from 'react';
import styles from './Order.module.css';
import classNames from 'classnames';
import Burger1 from '../../../assets/img/burger_1.jpg';
import Free from '../../../assets/img/free_1.jpg';
import HotDog from '../../../assets/img/hot-dog_1.jpg';

export const Order = () => {
  return (
    <div className={classNames(styles.catalog__order, styles.order)}>
      <section className={styles.order__wrapper}>
        <div className={styles.order__header} tabindex="0" role="button">
          <h2 className={styles.order__title}>Корзина</h2>

          <span className={styles.order__count}>4</span>
        </div>

        <div className={styles.order__wrap_list}>
          <ul className={styles.order__list}>
            <li className={styles.order__item}>
              <img className={styles.order__image} src={Burger1} alt="Супер сырный" />

              <div className={classNames(styles.order__goods, styles.goods)}>
                <h3 className={styles.goods__title}>Супер сырный</h3>

                <p className={styles.goods__weight}>512г</p>

                <p className={styles.goods__price}>
                  1279
                  <span className={styles.currency}>₽</span>
                </p>
              </div>

              <div className={styles.count}>
                <button className={styles.count__minus}>-</button>
                <p className={styles.count__amount}>1</p>
                <button className={styles.count__plus}>+</button>
              </div>
            </li>

            <li className={styles.order__item}>
              <img className={styles.order__image} src={Free} alt="Картошка фри" />

              <div className={classNames(styles.order__goods, styles.goods)}>
                <h3 className={styles.goods__title}>Картошка фри</h3>

                <p className={styles.goods__weight}>180г</p>

                <p className={styles.goods__price}>
                  245
                  <span className={styles.currency}>₽</span>
                </p>
              </div>

              <div className={styles.count}>
                <button className={styles.count__minus}>-</button>
                <p className={styles.count__amount}>2</p>
                <button className={styles.count__plus}>+</button>
              </div>
            </li>

            <li className={styles.order__item}>
              <img className={styles.order__image} src={HotDog} alt="Жгучий хот-дог" />

              <div className={classNames(styles.order__goods, styles.goods)}>
                <h3 className={styles.goods__title}>Жгучий хот-дог</h3>

                <p className={styles.goods__weight}>245г</p>

                <p className={styles.goods__price}>
                  239
                  <span className={styles.currency}>₽</span>
                </p>
              </div>

              <div className={styles.count}>
                <button className={styles.count__minus}>-</button>
                <p className={styles.count__amount}>1</p>
                <button className={styles.count__plus}>+</button>
              </div>
            </li>
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
