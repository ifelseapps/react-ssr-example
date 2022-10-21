import React, { FC } from 'react';
import { cnLayout } from '../cn';
import './Layout-Title.css';

export const LayoutTitle: FC = ({ children }) => (
  <h1 className={cnLayout('Title')}>{children}</h1>
);
