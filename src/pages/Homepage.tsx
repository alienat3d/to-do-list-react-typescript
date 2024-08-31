import { ListItem } from '../components/ListItem/ListItem';

import { ToDo } from '../models/todo-item';

interface ComponentProps {
  todos: ToDo[];
}

export const Homepage = ({ todos }: ComponentProps) => {
  return (
    <div className="container">
      {todos.map((todo: ToDo, index: number) => {
        return <ListItem todo={todo} key={index} />;
      })}
    </div>
  );
};
