import { useState } from 'react';

import { toast, Zoom } from 'react-toastify';

import { ToDo } from '../models/todo-item';

import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
  };

  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) todo.isDone = !todo.isDone;
      return todo;
    });
		if (toDoItem.isDone) {
			notifySuccess('Ура, ещё одна задача выполнена!');
		} else {
			notifyWarn('Упс, кажется это ещё нужно доделать...');
		}
    setTodos(newTodos);
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
		notifyInfo('Задача успешно была удалена из списка')
    setTodos(newTodos);
  };

  const notifySuccess = (text: string) => {
    toast.success(text, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Zoom,
    });
  };

  const notifyInfo = (text: string) => {
    toast.info(text, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Zoom,
    });
  };

  const notifyWarn = (text: string) => {
    toast.warn(text, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Zoom,
    });
  };

  return (
    <>
      <Form createNewToDo={createNewToDo} notifyInfo={notifyInfo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  );
};
