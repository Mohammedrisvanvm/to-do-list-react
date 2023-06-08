import { useState, useEffect } from "react";
import "./style.css";

import Form from "./components/form";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";


function App() {
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredToDos, setFilteredToDos] = useState([]);
  useEffect(() => {
    filterValues();
  }, [toDo,filter]);

  const filterValues = () => {
    switch (filter) {
      case "completed":
        setFilteredToDos(toDo.filter((item) => item.record === true));
        break;
      case "uncompleted":
        setFilteredToDos(toDo.filter((item) => item.record === false));
        break;
      default:
        setFilteredToDos(toDo);
        break;
    }
  };

  return (
    <>
      <Header/>
      <Form
        toDo={toDo}
        setToDo={setToDo}
        input={input}
        setInput={setInput}
        filter={filter}
        setFilter={setFilter}
      />
      <ToDoList toDo={toDo} setToDo={setToDo} filteredToDos={filteredToDos} />
    </>
  );
}

export default App;