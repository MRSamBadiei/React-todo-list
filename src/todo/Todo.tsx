import React, { useRef, useState } from "react";
import "../App.css";

interface List {
  text: string;
  isDone: boolean;
}

const Todo: React.FC<List> = ({ text, isDone }) => {
  const [check, setCheck] = useState(isDone);
  const ref = useRef<HTMLLIElement | null>(null);
  const handler = (): void => {
    setCheck(!check);
  };

  return (
    <li
      className={`col-12 list-group-item p-4 border-bottom rounded ${
        check ? "bg-success bg-opacity-10" : ""
      }`}
      ref={ref}
    >
      <div className="d-flex">
        <input
          onChange={handler}
          checked={check}
          className="form-check-input m-0 mt-auto mb-auto"
          type="checkbox"
        />
        <p
          className={`ms-3 mb-0 ${
            check ? "text-decoration-line-through " : ""
          }`}
        >
          {text}
        </p>
      </div>
    </li>
  );
};

export default Todo;
