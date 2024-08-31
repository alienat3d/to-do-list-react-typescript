import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"

// todo переход из [index.tsx]
// 3.1 Здесь мы принимаем props и типизируем его.
// 3.2 Внутри самого компонента нам нужно будет перебрать массив и вывести при каждой итерации элемент, который будет использоваться как ссылка на динамическую страницу.
// 3.3 Создадим ещё один компонент ListItem
// todo переход в [components/ListItem/ListItem.tsx]
// todo переход из [components/ListItem/ListItem.tsx]
// 3.4 Нам нужно реализовать перебор элементов массива с помощью map() и возвращать на каждый из todo - компонент ListItem.
// 3.5 Теперь у нас ошибка, потому, что забыли указать "key". Мы добавим компоненту ListItem атрибут key, значение которого могло бы равняться значению свойства id тудушки, но можно также использовать индекс элемента массива, не забыв указать и ему типизацию "number".
// 3.6 Также пробросим тудушку в компонент ListItem.
// todo переход в [components/ListItem/ListItem.tsx]

interface ComponentProps {
	todos: ToDo[]
}

export const Homepage = ({ todos }: ComponentProps) => {
	return (
		<div className="container">
			{
				todos.map((todo: ToDo, index: number) => {
					return (<ListItem todo={todo} key={index} />)
				})
			}
		</div>
	)
}