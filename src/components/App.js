import React,{ useState,useEffect, useRef } from "react";

import { useTodo } from "../hooks/useTodo";


import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";

import { TodoList } from "./TodoList";


function App() {

  const { todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };


  console.log(todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <React.Fragment>
      <TodoTitle title="TODO進捗管理" as="h1" />

      {/* <textarea ref={inputEl} />

      <button onClick={handleAddTodoListItem}>+ TODOを追加</button> */}

      <TodoAdd inputEL={inputEl} handleAddTodoListItem={handleAddTodoListItem} />

      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList 
        todoList={inCompletedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        />

      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList 
        todoList={completedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        />

    </React.Fragment>
  );
}

export default App;
