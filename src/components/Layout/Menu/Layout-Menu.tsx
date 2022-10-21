import React, { FC } from 'react';
import { cnLayout } from '../cn';
import './Layout-Menu.css';

export const LayoutMenu: FC = ({ children }) => (
  <nav className={cnLayout('Menu')}>{children}</nav>
);
