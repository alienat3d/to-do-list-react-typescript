import './ToDoListItem.scss';

import { ToDo } from '../../../models/todo-item';

// todo ==> [переход из ToDoList/ToDoList.tsx]
// 2.2 И этот параметр у нас будет типом "text: string". И теперь компонент "узнал" про данный атрибут
// 2.3 Ну, и чтобы вывести этот параметр text в качестве текстового контента просто укажем его там где нужно, т.е. в теге <span>
// todo ==> [переход из ToDoList/ToDoList.tsx]
// export const ToDoListItem = (props: { text: string }) => {
// 2.6 Ну и в итоге нам нужно также прописать интерфейс с типами для объекта toDoItem
// 2.7 И теперь уже мы можем использовать значение свойства "text" объекта "toDoItem" в <span>
// ? 3.0 Но как можно заметить здесь мы повторяемся, ведь в ToDoList.tsx мы уже прописывали интерфейс объекту todo1. Чтобы это исправить, следуя правилу DRY создадим папку models, где будут хранится типы и интерфейсы и поместим этот интерфейс туда.
// 3.1 Теперь, когда интерфейс создан импортируем его сюда и в ToDoList.tsx
// ? И благодаря интерфейсу и строгой типизации мы будет точно уверены, что мы передаёт 3 необходимых свойства, ничего не будет забыто и ничего не передано лишнего, а типы данных этих свойств будут соответствовать типам, указанным в интерфейсе ToDo.

// * 4. Теперь, что касается кнопки с галочкой. Нам нужно, чтобы она вначале была серого цвета, а после клика по ней становилась синего, указывая на то, что задача выполнена. Для этого в объекте todo1 у нас есть свойство "isDone" и с помощью тернарного оператора будем подставлять либо один CSS-класс, либо другой с разными стилями.

// todo ==> [переход из ToDoList.tsx]
// 10.5 Также нужно принять эти две функции и здесь.
// 10.6 На кнопку "корзина" повесим событие "onClick", которое вызовет коллбэк, в котором запустится deleteToDo, а кнопка "галочка" вызовет коллбэк с функцией updateToDo. А передавать внутрь обеих функций будем toDoItem
// todo ==> [переход в ToDoListPage.tsx]
export const ToDoListItem = (props: {
  // toDoItem: { id: number; text: string; isDone: boolean };
  toDoItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button 
					className="btn-trash"
					onClick={() => props.deleteToDo(props.toDoItem)}
				></button>
        <button
          className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}
					onClick={() => props.updateToDo(props.toDoItem)}
        ></button>
      </div>
    </li>
  );
};
