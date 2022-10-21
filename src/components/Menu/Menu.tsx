import React, { Children, cloneElement, FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { cnMenu } from './cn';
import './Menu.css';

export const Menu: FC = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <ul className={cnMenu()}>
      {
        Children.map(children, (child) => cloneElement(child as ReactElement, {
          active: pathname === (child as ReactElement).props.to
        }))
      }
    </ul>
  );
};
