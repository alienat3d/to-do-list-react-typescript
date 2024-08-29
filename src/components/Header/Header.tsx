import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <a className={classes.link} href="/">ToDos</a>
      </div>
    </header>
  );
};