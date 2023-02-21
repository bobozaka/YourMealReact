import classNames from 'classnames';
import React from 'react';
import style from './Contaier.module.css';

export const Container = ({ children, className }) => {
  return <div className={classNames(style.container, className)}>{children}</div>;
};
