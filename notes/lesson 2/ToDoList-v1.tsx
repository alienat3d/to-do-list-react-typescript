export const ToDoList = () => {
  return (
    <>
      <h1>ToDo List Page</h1>
      <h2>Bla-bla-bla</h2>
    </>
  );
};

// ? Правило React такого, что 1 компонент может возвращать лишь 1 главный родительский блок.
// * Если мы хотим поместить в компонент два одинаковых тега, но без лишней обёртки.
/* import React from "react";

export const ToDoList = () => {
  return (
    <React.Fragment>
      <h1>ToDo List Page</h1>
      <h2>Bla-bla-bla</h2>
    </React.Fragment>
  );
}; */

// * Или в современном React даже записывают ещё короче:
/* export const ToDoList = () => {
  return (
    <>
      <h1>ToDo List Page</h1>
      <h2>Bla-bla-bla</h2>
    </>
  );
}; */