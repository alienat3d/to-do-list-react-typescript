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
			notifySuccess('Yay, another task accomplished!');
		} else {
			notifyWarn('Oops, looks like this still needs to be done....');
		}
    setTodos(newTodos);
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
		notifyInfo('The task was successfully removed from the list')
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
