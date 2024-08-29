// Предыдущий SCSS-файл теперь не нужен, но оставил его для наглядности
// import "./Header.scss";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
				{/* Если нам нужно указать элементу два класса */}
        {/* <a className={`${classes.link} ${classes.active}`} href="/">ToDos</a> */}
        <a className={classes.link} href="/">ToDos</a>
      </div>
    </header>
  );
};