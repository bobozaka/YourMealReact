import React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.header__container}>
            <img className={styles.header__logo} src={Logo} alt="Логотип YourMeal" />

            <div className={styles.header__wrapper}>
              <h1 className={styles.header__title}>
                <span>Только самые</span>
                <span className={styles.header__red}>сочные бургеры!</span>
              </h1>

              <p className={styles.header__appeal}>Бесплатная доставка от 599₽</p>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
