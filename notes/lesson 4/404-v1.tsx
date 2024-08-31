import classes from "./404.module.scss";

import { Link } from "react-router-dom"

// todo переход из [components/ListItem.tsx]
// * 4.0 Добавим также страницу 404, на случай, если какая-то ссылка испортится.
// todo переход в [index.tsx]

export const NotFound = () => {
	return (
		<div className="container">
			<h1>Извините, запрашиваемая вами страница куда-то пропала...</h1>
			<Link className={classes.link} to="/">Назад на главную страницу</Link>
		</div>
	)
}