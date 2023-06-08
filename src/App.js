import React from "react";
import "./index";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const deleteHandler=(id)=>{
    
     setToDos(toDos.filter(el=>el.id !== id ))

    
  }
  const completedToDo=(id)=>{
  
 
  }
  const date =new Date()


  return (
    <div className="app">
      <div className="mainHeading"> 
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {date.toDateString()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>{

            setToDos([...toDos, { id: Date.now(), text: toDo, status: false, completed:false }])

          }
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setToDos(
                      toDos.filter((value2) => {
                        if (value2.id === value.id) {
                          value2.status = e.target.checked;
                        }
                        return value2;
                      })
                    );
                  }}
                  type="checkbox"
                  name=""
                  value={value.status}
                  id=""
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>completedToDo(value.id)} className="fa-sharp fa-solid fa-circle-check fa-primary"></i>
                <i onClick={()=>deleteHandler(value.id)} className="fas fa-trash ms-3"></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div>
                <h1>{obj.text}</h1>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
