import './assets/scss/normalize.scss';
import 'react-toastify/dist/ReactToastify.css';

import './assets/scss/global.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ToDo } from './models/todo-item';

import { Layout } from './layouts/Layout';

import { Header } from './components/Header/Header';

import { Homepage } from './pages/Homepage';
import { ToDoListPage } from './pages/ToDoListPage';
import { NotFound } from './pages/404/404';
import { ItemDescription } from './pages/ItemDescription';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Посмотреть уроки по ReactJS',
    isDone: true,
  },
  {
    id: 1,
    text: 'Сделать домашку по урокам',
    isDone: true,
  },
  {
    id: 2,
    text: 'Приготовить еду',
    isDone: false,
  },
  {
    id: 3,
    text: 'Прибраться в квартире',
    isDone: false,
  },
];

// * 1.0 В этом уроке мы рассматриваем React-маршрутизацию, для этого нам понадобится поставить библиотеку 'npm i react-router-dom'.
// 1.1 Мы создадим также вторую страницу Homepage, которую свяжем с данными, которые будем заносить в ToDo-лист.
// 1.2 А дальше для того, чтобы настроить роутинг в этом приложении нужно обернуть компонент ToDoListPage в несколько компонентов-обёрток: BrowserRouter, Routes & Route.
// 1.3 Теперь помесим туда страницы и в атрибутах напишем путь "path" к каждой из них, а атрибут element сами компоненты. В итоге теперь функционал управления ToDo-листом будет рендериться по ссылке url/todo, а на главной странице будет выводиться Homepage.

// * 2.0 Займёмся и шапкой сайта. Дело в том, что пока она выводится только на странице todo, т.е. в компоненте ToDoListPage, и хорошо бы сделать, чтобы она выводилась и в Homepage. Для этого перенесём компонент шапки Header, как и его импорт, из ToDoListPage сюда.
// todo переход в [components/Header/Header.tsx]
// todo переход из [components/Header/Header.tsx]
// * 3.0 А теперь создадим массив todos, который будет использоваться пока для тестов. Пробросим его в Homepage.
// todo переход в [pages/Homepage.tsx]

// todo переход из [pages/404.tsx]
// * 4.1 Добавим Route для * и подставим компонент NotFound.

// * 5.0 Создадим динамический Route, чтобы он работал для каждой отдельной ссылки задач ToDo-листа. А динамическая подстановка числа в ссылку достигается так: ":id"
// 5.1 Также создадим отдельную страничку для отдельной тудушки ItemDescription и добавим её элементом в новый Route.
// 5.2 В него также будем пробрасывать массив todos.
// todo переход в [pages/ItemDescription.tsx]

// ! 6.0 Описанный роутинг является устаревшим способом его записи, но мы также рассмотрим теперь и более современный.
// 6.1 В новом синтаксисе появляется понятие "layout". Мы создадим папку layouts, их может быть несколько, но в данном проекте работаем с 1.
// todo переход в [layouts/Layout.tsx]
// todo переход из [layouts/Layout.tsx]
// 6.5 Теперь создаём router методом createBrowserRouter(), в нём лежит массив, который представляет собой роутинг в Layout.
// 6.6 Первый объект и будет сам Layout, где children — дочерние элементы, которые будут рендериться на место Outlet.
// 6.7 И вместо всего, что у нас было в BrowserRouter добавим компонент <RouterProvider router={router} />, куда мы передали созданный только что router.
// 6.8 Ещё нам надо разобраться со страницей ошибки 404. Для этого в первый объект с Layout допишем свойство errorElement и передадим ему компонент страницы NotFound.

// ? 7.0 Есть ещё один нюанс, связанный с бесплатным хостингом GitPages, дело в том, что у него сразу за доменом идёт поддомен, а все наши ссылки были настроены относительно доменного имени. Для корректного роутинга в самом конце, после массива, вторым параметром createBrowserRouter() нужно указать объект, в котором будет свойство basename и значение, к примеру '/app/', т.е. название поддомена. Теперь все маршруты идут относительно значения, указанного в 'basename'.
// todo переход в [components/ListItem.tsx]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Homepage todos={todos} />
			},
			{
				path: '/todo',
				element: <ToDoListPage />
			},
			{
				path: '/todo',
				element: <ToastContainer />
			},
			{
				path: '/list/:id',
				element: <ItemDescription todos={todos} />
			},
		]
  },
	{
		path: '*',
		element: <NotFound />
	} // для корректного роутинга страницы 404 добавим ещё один объект
], { basename: '/app/'});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
		<RouterProvider router={router} />
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage todos={todos} />}></Route>
        <Route
          path="/list/:id"
          element={<ItemDescription todos={todos} />}
        ></Route>
        <Route path="/todo" element={<ToDoListPage />}></Route>
        <Route path="/todo" element={<ToastContainer />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
