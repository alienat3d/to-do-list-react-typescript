import './ToDoList.scss';

import { ToDo } from '../../models/todo-item';

import { ToDoListItem } from './ToDoListItem/ToDoListItem';

// 1.1 Дальше мы напишем интерфейс для данного объекта
// ? [Впоследствии перенесён в [../models/todo-item.ts]
/* interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
} */

// ? 2.0 Вспомним, что сам компонент это всего лишь функцию, которая возвращает вёрстку или точнее синтаксис JSX/TSX, это вёрстка с несколько изменённым синтаксисом и новыми возможностями прописать компоненты, а также с возможностью передавать атрибуты в компоненты.

// * 7.0 Есть ещё кое-что, что следует сделать — держать здесь массив todos нам не нужно. Нам следует вынести его на уровень выше в ToDoListPage.tsx. А в ToDoList мы будем получать "props", который объект, у которого есть todos типа массив ToDo[]
// todo ==> [переход в ToDoListPage.tsx]
// todo ==> [переход из ToDoListPage.tsx]
// 10.3 Принимаем их здесь, добавляя в пропсы updateToDo & deleteToDo, обе по типу Function
// 10.4 А также нужно прокинуть их в каждый из элементов компонента ToDoListItem, однако не забывая уже дописывать "props." в начале
// todo ==> [переход в ToDoListItem.tsx]
export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  // * 1.0 Приступим к созданию логики для ToDo-листа. Создадим первый объект для ToDo-задачи.
  // 1.2 И теперь мы можем передать этот интерфейс объекту

  // * 5.0 Но у нас ведь будет гораздо больше объектов, чем два, да и держать их в конкретных объектах не слишком правильно. Поэтому мы положим их в массив, а дальше мы будем перебирать этот массив и все объекты, у который свойство isDone === false будем выводить в первый список, а у тех, у кого значение true — во второй. Заодно мы разберёмся с массивами, их фильтрацией и переборами.
  // 5.1 Итак создадим массив для ToDo-задач, и т.к. он состоит только из таких задач, то можем его типизировать интерфейсом ToDo, но добавим ещё [], что будет значит, что данный элемент будет массивом, в котором будут элементы типа ToDo.
  // 5.2 Далее мы перенесём туда наши объекты. ↓

  /*   const todos: ToDo[] = [
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

  // * 6. Ещё лучше замкнуть этим переборы массива в функцию, чтобы код выглядел более лаконично и без повторений.

  // * 7.1 Также и здесь мы уже работаем не просто с todos, а с props.todos.
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={index}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };
  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={index}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  /*   const todo1: ToDo = {
		id: 0,
		text: 'Первая задача',
		isDone: false,
	};
  const todo2: ToDo = {
		id: 1,
		text: 'Вторая задача',
		isDone: true,
	}; */

  // 2.1 Мы передадим атрибут "text" одному из компонентов ToDoListItem. Но, чтобы он заработал, нам надо ещё перейти в сам компонент и передать ему в параметры "props" (который будет принимать атрибуты)
  // todo ==> [переход в ToDoListItem/ToDoListItem.tsx]
  // 2.4 Т.к. нам надо передать в атрибут компонента именно объект, то передавать его будет в {}, ибо всё, что не является строкой передаётся именно так.
  // 2.5 Теперь мы назовём атрибут "toDoItem" и будем передавать в него весь объект todo1.
  // todo ==> [переход в ToDoListItem/ToDoListItem.tsx]

  // 5.3 Для перебора используем метод map(). С помощью него мы перебираем весь массив todos и для каждого объекта выводим компонент ToDoListItem, передавая каждый объект внутрь него атрибутом.
  // 5.4 Для корректной работы React нам также нужно указать каждому компоненту атрибут "key", допишем его и поместим туда index. Дело в том, что React следит за обновлением элементов в процессе перебора.
  // 5.5 Ещё нам нужно отфильтровать объекты и добавлять в этот список только те, чьё свойство "isDone" равняется false. Для этого перед map() допишем filter(), который будет получать на каждой итерации item, а возвращать только те, где !item.isDone.
  // 5.6 Для второго списка мы делаем тоже самое, за исключением того, что фильтре у нас будет isDone равен true.
  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {checkedList()}
        {/* <ToDoListItem toDoItem={todo1} /> */}
      </ul>
      <ul className="todo-list completed">
        {uncheckedList()}
        {/* <ToDoListItem toDoItem={todo2} /> */}
      </ul>
    </div>
  );
};
