import classes from './404.module.scss';

import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className={classes.outerContainer}>
      <div className="container">
        <h1 className={classes.title}>Congratulations! 🎉</h1>
				<h2 className={classes.subtitle}>You’ve just found an <span className={classes.error404}>error 404</span> page!</h2>
        <Link className={classes.link} to="/">
					You can now happily return to the homepage
        </Link>
      </div>
    </div>
  );
};
