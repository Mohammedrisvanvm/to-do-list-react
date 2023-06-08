import React from "react";

function ToDos({ title, toDo, value, setToDo }) {
  const deleteHandler = () => {
    setToDo(toDo.filter((elem) => elem.id !== value.id));
  };

  const toggler = () => {
    setToDo(
      toDo.map((elem) => {
        if (elem.id === value.id) {
          return {
            ...elem,
            record: !elem.record,
          };
        }
        return elem;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${value.record ? "completed" :""}`}>{title}</li>
      <button onClick={toggler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDos;