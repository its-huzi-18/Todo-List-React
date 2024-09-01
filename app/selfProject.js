//my code
"use client";
import React, { useState } from "react";

export default function page() {
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (i) => {
    setmainTask([...mainTask, { tittle, desc }]);
    i.preventDefault();
    settittle("");
    setdesc("");
  };
  let renderTask = <h2 className="font-semibold text-xl">No Task Avalaible</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="font-semibold text-2xl">{t.tittle}</h5>
            <h6 className="font-medium text-lg">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-600 py-2 px-4 font-bold text-white rounded-sm"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  return (
    <div>
      <header className="bg-gray-600 text-3xl font-bold flex justify-center p-5 text-white">
        Huzaifa Todolist
      </header>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Task"
          className="border-zinc-900 border-4 text-2xl py-2 px-4 text-center m-8"
          value={tittle}
          onChange={(elem) => {
            settittle(elem.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Description"
          className="border-zinc-900 border-4 text-2xl py-2 px-4 text-center m-8"
          value={desc}
          onChange={(elem) => {
            setdesc(elem.target.value);
          }}
        />
        <button className="bg-black text-white py-3 px-4 rounded-sm m-2 font-bold">
          Add Task
        </button>
      </form>
      <hr className="m-1" />
      <div className="bg-gray-600 flex py-2 text-2xl font-bold text-white justify-around">
        <h1 className="mx-4">Tittle</h1>{" "}
        <h1 className="mx-[45rem]">Description</h1>
      </div>
      <div className="bg-gray-400 text-center p-8">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}
