import React from 'react';
import styles from './Navigation.module.css';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.navigation__container}>
          <ul className={styles.navigation__list}>
            {category.map((item, i) => (
              <li key={i} className={styles.navigation__item}>
                <button
                  className={classNames(
                    styles.navigation__button,
                    activeCategory === i ? styles.navigation__button_active : '',
                  )}
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={() => {
                    dispatch(changeCategory({ indexCategory: i }));
                  }}>
                  {item.rus}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};
