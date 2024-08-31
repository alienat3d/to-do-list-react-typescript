import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header";

// todo переход из [index.tsx]
// 6.2 Здесь мы добавим новый компонент Outlet — это то место, куда будут рендериться компоненты страниц.
// ? 6.3 Рядом с Outlet можно расположить любые элементы или добавить какую-то обёртку, которая будет оборачивать все страницы, которые есть в React-приложении.
// 6.4 Например у нас тут есть общий элемент Header, его мы и добавим к Outlet
// todo переход в [index.tsx]

export const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}