import React, { FC } from 'react';
import { cnLayout } from './cn';
import './Layout.css';
import { LayoutTitle } from './Title/Layout-Title';
import { LayoutMenu } from './Menu/Layout-Menu';
import { Menu, MenuItem } from '../Menu';
import { LayoutContent } from './Content/Layout-Content';

export const Layout: FC = ({ children }) => (
  <div className={cnLayout()}>
    <LayoutTitle>Справочник 1.0</LayoutTitle>
    <LayoutMenu>
      <Menu>
        <MenuItem to="/">Главная</MenuItem>
        <MenuItem to="/about">О программе</MenuItem>
      </Menu>
    </LayoutMenu>
    <LayoutContent>{children}</LayoutContent>
  </div>
);
