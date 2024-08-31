import classes from './Header.module.scss';

import { NavLink } from 'react-router-dom';

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${classes.link} ${classes.active}` : classes.link;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink className={getActiveClass} to="/">
          ToDos
        </NavLink>
        <NavLink className={getActiveClass} to="/todo">
          Панель управления
        </NavLink>
      </div>
    </header>
  );
};
