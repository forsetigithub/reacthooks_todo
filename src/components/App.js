import React,{  useRef } from "react";

import { Container } from "@chakra-ui/layout";

import { useTodo } from "../hooks/useTodo";


import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";

import { TodoList } from "./TodoList";
import { AddIcon } from "@chakra-ui/icons";


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
      <Container centerContent p={{ base: "4", md: "6"}} maxWidth="3xl" >

      <TodoTitle title="TODO進捗管理" as="h1" fontSize={{base: "2xl", md: "3xl"}} />

      {/* <textarea ref={inputEl} />

      <button onClick={handleAddTodoListItem}>+ TODOを追加</button> */}

      <TodoAdd placeholder="ADD TODO" leftIcon={<AddIcon />} buttonText="TODOを追加" inputEL={inputEl} handleAddTodoListItem={handleAddTodoListItem} />


      <TodoList 
        todoList={inCompletedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト" 
        as="h2"
        fontSize={{ base: "xl", md: "2xl"}}
        />


      <TodoList 
        todoList={completedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト" 
        as="h2"
        fontSize={{ base: "xl", md: "2xl"}}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
