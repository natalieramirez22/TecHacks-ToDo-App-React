import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentText, setCurrentText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const TodoItem = ({ item }) => {
    return (
      <div>
        <div className="row">
          <li>{item}</li>
          <button
            onClick={() => {
              setTodoList(
                todoList.filter((listItem) => {
                  return item !== listItem;
                })
              );
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <input
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setTodoList([...todoList, currentText]);
          setCurrentText("");
        }}
      >
        Submit
      </button>
      <div>
        {todoList.map((item) => {
          return <TodoItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
