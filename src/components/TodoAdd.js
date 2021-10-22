export const TodoAdd = ({ inputEL, handleAddTodoListItem}) => {
  return(
    <>
      <textarea ref={inputEL} />

      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  );
};