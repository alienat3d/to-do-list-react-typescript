import './assets/scss/normalize.scss';
import 'react-toastify/dist/ReactToastify.css';

import './assets/scss/global.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter,	RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ToDo } from './models/todo-item';

import { Layout } from './layouts/Layout';

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
	}
], { basename: '/app/'});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>
);