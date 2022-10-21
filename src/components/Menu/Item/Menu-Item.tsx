import React, { FC } from 'react';
import { compose } from '@bem-react/core';
import { cnMenu } from '../cn';
import { withActiveStyle } from './_active/Menu-Item_active';
import './Menu-Item.css';
import { Link } from 'react-router-dom';

export interface IMenuItemBaseProps {
  to: string;
  active?: boolean;
}

export const MenuItemBase: FC<IMenuItemBaseProps> = ({ children, to, active }) => (
  <li className={cnMenu('Item', { active })}>
    <Link to={to} className={cnMenu('Link')}>{children}</Link>
  </li>
);

export const MenuItem = compose(withActiveStyle)(MenuItemBase);
