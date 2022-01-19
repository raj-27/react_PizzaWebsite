import React from "react";

function TodoInput({ setInputText, Todos, setTodos, InputText, setStatus }) {
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    if (InputText === "") {
      alert("First add User");
    } else {
      setTodos([
        ...Todos,
        { id: Math.random() * 1000, text: InputText, complete: false },
      ]);
      setInputText("");
    }
  };

  let handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <h1 className="text-center text-white">Todo List</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          value={InputText}
          className="form-control"
          placeholder="Add todo Item"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary text-white"
            type="button"
            onClick={handleInput}
          >
            Add
          </button>
          <select
            className="form-select mx-1"
            aria-label="Default select example"
            onChange={handleStatus}
          >
            <option value="All">All</option>
            <option value="complete">completed</option>
            <option value="incomplete">incomplete</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default TodoInput;
