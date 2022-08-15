import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Todo from "./todo/Todo";

interface List {
  text: string;
  isDone: boolean;
}

const App: React.FC = () => {
  /*
  var remove = document.querySelector(".draggable");

 


  */

  //
  const [list, setList] = useState<List[]>([]);
  const [text, setText] = useState<string>("");

  const add = (): void => {
    setText("");
    text.split(" ").join("") !== ""
      ? setList((list) => [...list, { text: text, isDone: false }])
      : console.error("Empty input");
  };

  return (
    <div className="App vh-100">
      <div className="container glass h-100">
        <div className="row mt-5">
          <div className="col-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="new todo"
                aria-describedby="button-addon2"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={add}
              >
                Add
              </button>
            </div>
          </div>
          <ul className="row list-group list-group-flush m-0 p-0">
            {list.map((value, index) => {
              return (
                <Todo isDone={value.isDone} text={value.text} key={index} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
