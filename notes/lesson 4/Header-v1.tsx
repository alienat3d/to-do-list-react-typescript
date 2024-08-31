import classes from './Header.module.scss';

import { NavLink } from 'react-router-dom';

// todo переход из [index.tsx]
// * 2.1 Добавим в шапку ещё ссылку <a>, где поменяем значение атрибута "href" на "/todo" и назовём её "Панель управления".
// 2.2 Но, чтобы превратить это приложение в SPA нам понадобится ещё один компонент Link. У него есть обязательный атрибут "to", куда укажем ссылки, где будут находиться страницы относительно корня сайта.
// 2.3 Также добавим им className, а старые ссылки уже можно удалять*. (*пока останутся для наглядности)

// * 3.0 Теперь сделаем так, чтобы ссылка той страницы, где мы находимся как-то выделялась. Для этого пригодится NavLink (по сути тоже самое, что и Link, но более расширенная его версия). Чтобы реализовать выделение активности нужно немного изменить содержимое className. Мы поместим туда коллбэк, который вернёт 'active', а получать он будет isActive, от которого зависит активна ли ссылка (находимся ли мы на этой странице или нет). Теперь с помощью тернарника мы можем использовать это значение. Для удобства использования вынесем это в отдельную функцию getActiveClass, которая будет принимать isActive, но теперь нужно также его типизировать, т.е. указать, что оно является булевым значением.
// todo переход в [index.tsx]
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
        {/* <a className={classes.link} href="/">ToDos</a>
        <a className={classes.link} href="/todo">Панель управления</a> */}
      </div>
    </header>
  );
};
