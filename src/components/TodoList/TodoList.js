import React from "react";
import TodoListItem from "./../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ data, onDeleted, onToggleImportant, onToggleDone }) => {
  const Elements = data.map((el) => {
    const { id, ...elProps } = el;
    return (
      <li className="list-group-item" key={el.id}>
        <TodoListItem
          label={el.label}
          {...elProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{Elements}</ul>;
};

export default TodoList;
