import './assets/scss/normalize.scss';
import 'react-toastify/dist/ReactToastify.css';

import './assets/scss/global.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import { ToDoListPage } from './pages/ToDoListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoListPage />
		<ToastContainer />
  </React.StrictMode>
);