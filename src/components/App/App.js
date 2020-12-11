import React, { Component } from "react";
import AddListItem from "../AddListItem/AddListItem";

import TodoHeader from "../TodoHeader/TodoHeader";
import TodoList from "../TodoList/TodoList";
import TodoSearch from "../TodoSearch/TodoSearch";
import "./App.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createDataItem("learn JS"),
      this.createDataItem("learn react JS"),
      this.createDataItem("Build react App"),
    ],
    term: "",
    filter: "all", // all, done, active
  };

  deletedItem = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);

      const newArr = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)];
      return {
        todoData: newArr,
      };
    });
  };
  createDataItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  addNewItem = (text) => {
    const item = this.createDataItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, item];
      return {
        todoData: newArr,
      };
    });
  };
  toggleProperty(arr, id, propName) {
    const indx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[indx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };
  onSearchChange = (term) => {
    this.setState({ term });
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const countDone = todoData.filter((el) => el.done).length;
    const countTodo = todoData.length - countDone;
    return (
      <div className="container d-flex wrapper">
        <div>
          <TodoHeader toDo={countTodo} done={countDone} />
          <TodoSearch
            onSearchChange={this.onSearchChange}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <div>
          <TodoList
            data={visibleItems}
            onDeleted={this.deletedItem}
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}
          />
        </div>
        <div>
          <AddListItem addNewItem={this.addNewItem} />
        </div>
      </div>
    );
  }
}
