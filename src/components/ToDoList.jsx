import React from "react";
import ToDos from "./ToDos";

function ToDoList({ toDo,setToDo,filteredToDos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((item) => (
          <ToDos toDo={toDo} setToDo={setToDo} value={item} key={item.id} title={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;