import { IClassNameProps, withBemMod } from '@bem-react/core';
import { cnMenu } from '../../cn';
import './Menu-Item_active.css';

export interface IMenuItemProps extends IClassNameProps {
  active?: boolean;
}

export const withActiveStyle = withBemMod<IMenuItemProps>(cnMenu('Item'), { active: true });
