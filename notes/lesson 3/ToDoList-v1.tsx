import './ToDoList.scss';

import { ToDoListItem } from './ToDoListItem/ToDoListItem';

// ? 1.2.0 Но неужели придётся указывать тип рядом с каждой переменной? Не совсем, в TS есть также т.н. "кастомные типы". Также хранить их можно в любом файле импортировать и экспортировать его.
type FirstType = string | number;

// ? 1.3.0 На самом деле можно пойти дальше и конкретизировать тип данных до значения
type SecondType = 'my variable' | number;

export const ToDoList = () => {
  // 1.0 Чтобы указать, что myVar может быть и строкой и числом укажем ":string | number"
  // ? 1.1 Также, если мы точно не знаем какой тип данных нам будет нужен, то можно использовать ": any". Однако это является признаком плохих практик и по возможности нужно избегать этого.
  // let myVar: string | number = 'my variable';

  // 1.2.1 Теперь мы можем его использовать где потребуется вместо типа для переменных.
  // let myVar: FirstType = 'my variable';

  // 1.3.1 И стоит только изменить значение, то выйдет ошибка
  // let myVar: SecondType = 'my variables';
  let myVar: SecondType = 'my variable';

  myVar = 3;

	// * 2.0 Теперь рассмотрим работу с объектами в TypeScript. В TS есть ещё одна сущность, похожая на type, но с чуть более расширенными возможностями — "interface". В нём мы можем указывать названия свойств и их типы.
	interface Human {
		name: string
	}
	// ? 2.3.0 Однако в TS есть ещё наследование интерфейсов (очень похожее на наследование JS-классов). Они унаследуют типизацию из родительского интерфейса Human, а затем добавят свои собственные.
	// ? 2.4 Мы также можем указать необязательное свойство поставив перед ":" "?", это будет означать, что данное свойство можно и не указывать.
	interface Male extends Human {
		gender?: 'male'
	}
	interface Female extends Human {
		gender: 'female',
	}

	// 2.1 Сам интерфейс мы будем использовать в качестве типа для каждого из объектов
	// 2.3.1 И теперь в качестве типа мы можем передать Male & Female
	// const human1: Human = {
	const human1: Male = {
		name: 'Al',
		gender: 'male'
	}
	// 2.2 Но стоит добавить свойство "gender", то будет ошибка, т.к. это свойство недопустимо в интерфейсе Human
	// const human2: Human = {
	const human2: Female = {
		name: 'Katie',
		gender: 'female'
	}
	const child: Male = {
		name: 'Peter'
	}

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <ToDoListItem />
      </ul>
      <ul className="todo-list completed">
        <ToDoListItem />
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
