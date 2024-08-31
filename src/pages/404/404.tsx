import classes from "./404.module.scss";

import { Link } from "react-router-dom"

export const NotFound = () => {
	return (
		<div className="container">
			<h1>Извините, запрашиваемая вами страница куда-то пропала...</h1>
			<Link className={classes.link} to="/">Назад на главную страницу</Link>
		</div>
	)
}