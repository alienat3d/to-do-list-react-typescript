import { useState } from 'react';

import { ToDo } from '../models/todo-item';

import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';

// todo ==> [переход из ToDoList.tsx]
// * 7.1 Также не забудем добавить в наш компонент ToDoList атрибут, куда передадим массив todos.

// todo ==> [переход из Form.tsx]
// 8.6 Для этого нам нужно выкинуть строку из newTodoText на уровень выше. Для этого создадим здесь новую функцию createNewToDo(). Она будет получать аргументом text типа string и выводить пока в консоль. И передадим её в виде аргумента в компонент Form.
// todo ==> [переход в Form.tsx]
// todo ==> [переход из Form.tsx]
// * 9.0 А теперь по аналогии с тем, как только что поработали со строкой ввода, занося её значение в state, сделаем тоже самое и с массивом todos. Перенесём весь наш массив в useState. И теперь для изменения массива мы можем использовать метод "setTodos". Но также нам нужно типизировать массив, для этого после useState добавим <>, куда вставим интерфейс ToDo и массив.
// 9.1 А теперь нам осталось добавлять новый объект в наш массив todos в функции createNewToDo(). Где мы пропишем в id "todos.length", в text - text и isDone по умолчанию false.
// 9.2 После чего мы вызываем setTodos, куда передаются с помощью rest-оператора все объекты тудушек и добавляем к ним, только что созданный newToDo.
// * 10.0 Нам потребуются ещё две функции, одна, чтобы переводить выполненную тудушку из списка невыполненных в выполненные, меняя свойство "isDone" на true. А также удалять тудушку по клике на кнопку "корзина".
// 10.1 Каждая из функций будет принимать в параметры toDoItem типа ToDo.
// 10.2 Также необходимо в компонент ToDoList прокинуть обе функции.
// todo ==> [переход в ToDoList.tsx]
// todo ==> [переход из ToDoListItem.tsx]
// 10.7 Как только мы убедились, что новые два метода отлично работают и с теми элементами, что нужно, мы можем их связать со стейтом, и тогда React автоматически сам обновит и перерендерит все элементы, исходя из нового состояния.
// 10.8 Для функции updateToDo() мы создадим новый массив newTodos, обратимся методом map() к todos, который будет перебирать массив, изменяя какой-то из объектов тудушек. В нём мы пропишем условие, что если id тудушки, по которой кликнули совпадает с id тудушки в стейте, то у неё поменяется свойство isDone на противоположное. И в конце вернём todo, а затем вызовем setTodos, куда передадим новый массив newTodos.
// 10.9 А что касается функции deleteToDo(), то тут мы также создадим новый массив newTodos, где мы отфильтруем массив todos методом filter(), который вернёт все тудушки, кроме той, на которую кликнули, т.е. она будет исключена из нового массива. И также отправим новый массив в setTodos на изменение стейта и перерендеринг приложения.
// 11. Ну и в итоге, т.к. мы теперь закончили функционал и можем создавать с лёгкостью новые тудушки, то можем очистить тестовые объекты тудушек и оставить лишь пустой массив.
export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ToDo[]>([]);

	/* const todos: ToDo[] = [
		{
			id: 0,
			text: 'Учиться JavaScript',
			isDone: false,
		},
		{
			id: 1,
			text: 'Сварить суп',
			isDone: true,
		},
		{
			id: 2,
			text: 'Сходить погулять',
			isDone: true,
		},
	]; */

	const createNewToDo = (text: string) => {
		const newToDo: ToDo = {
			id: todos.length,
			text: text,
			isDone: false
		}
		setTodos([...todos, newToDo]);
	}

	const updateToDo = (toDoItem: ToDo) => {
/* 		console.log('update');
		console.log(toDoItem); */
		const newTodos = todos.map((todo) => {
			if (todo.id === toDoItem.id) todo.isDone = !todo.isDone;
			return todo;
		})
		setTodos(newTodos);
	}

	const deleteToDo = (toDoItem: ToDo) => {
/* 		console.log('delete');
		console.log(toDoItem); */
		const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
		setTodos(newTodos);
	}

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  );
};
