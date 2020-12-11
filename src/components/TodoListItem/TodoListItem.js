import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done,
  important,
}) => {
  let classNames = "todo-list-item";

  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }
  return (
    <span className={classNames}>
      <span onClick={onToggleDone} className="todo-list-item-label">
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o"></i>
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
