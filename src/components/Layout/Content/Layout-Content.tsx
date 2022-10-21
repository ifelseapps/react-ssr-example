import React, { FC } from 'react';
import './Layout-Content.css';
import { cnLayout } from '../cn';

export const LayoutContent: FC = ({ children }) => (
  <div className={cnLayout('Content')}>{children}</div>
);
