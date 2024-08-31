import classes from './ListItem.module.scss';

import { Link } from 'react-router-dom';

import { ToDo } from '../../models/todo-item';

// todo переход в [pages/Homepage.tsx]
// todo переход из [pages/Homepage.tsx]
// 3.6 Принимаем тудушку в пропсы. Или же мы можем деструктурировать объект и забыть про то, чтобы везде писать props props.
// 3.7 Ну и в атрибут ссылки href мы запишем /list/ + todo.id
// 3.8 Займёмся стилизацией в SCSS-модуле, а также при помощи тернарника будем окрашивать задачи в разные цвета, в зависимости от того выполнены они уже или ещё нет.
// todo переход в [pages/404.tsx]
// todo переход из [index.tsx]
// 7.1 Теперь, чтобы ссылки правильно работали, нам надо либо переименовать <a> в <Link to="">, либо добавим target="_blank" и добавим в href поддоменное имя.

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    /*     <a className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} href={`/list/${todo.id}`}>
      {todo.text}
    </a> */
    {/* <a
      className={`${classes.link} ${
        todo.isDone ? classes.done : classes.notDone
      }`}
      href={`/app/list/${todo.id}`}
      target="_blank"
    >
      {todo.text}
    </a> */}
    <Link className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} to={`/list/${todo.id}`}>{todo.text}</Link>
  );
};
