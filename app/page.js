
"use client";
import React, { useState } from "react";

export default function page() {
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  
  const submitHandler = (data) => {
    data.preventDefault();
    setmainTask([...mainTask, {tittle,desc}])
    settittle("");
    setdesc("");
  };
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let renderTask = <h2 className = "font-semibold text-xl">No Task Avalaible</h2>;
  
  if(mainTask.length >0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key = {i} className =  "flex items-center justify-between mb-5">
       <div className = "flex items-center justify-between mb-5 w-2/3">
      <h5 className ="font-semibold text-2xl ">{t.tittle}</h5>
      <h6 className ="font-medium text-lg ">{t.desc}</h6>
    </div>
      <button onClick={()=>{deleteHandler(i)}}
      className = "bg-red-600 text-white font-bold rounded-sm px-4 py-2">Delete</button>
      </li>
  )})
}
  return (
    <div>
      <h1 className="bg-gray-700 p-5 text-white text-center font-bold text-4xl">
        Huzaifa Todolist
      </h1>
      <form onSubmit={submitHandler} >
        <input
          type="text"
          placeholder="Enter Your Task Here"
          className="text-2xl border-zinc-800 border-4 m-8 py-2 px-2 text-center"
          value={tittle}
          onChange={(elem) => {
            settittle(elem.target.value);
          }}
          />
        <input
          type="text"
          placeholder="Enter Description Here"
          className="text-2xl border-zinc-800 border-4 m-8 py-2 px-2 text-center"
          value={desc}
          onChange={(elem) => {
            setdesc(elem.target.value);
          }}
          />
        <button className="bg-black text-white font-bold rounded-sm px-4 py-3 m-5">
          Add Task
        </button>
      </form>
      <hr className="m-1" />
      <div className ="flex  bg-zinc-700 text-white py-2">
<h1 className="mx-4 font-bold text-2xl">Tittle</h1>
<h1 className = " mx-[45rem] font-bold text-2xl">Description</h1>
      </div>
      <div className="p-8 bg-gray-400 text-center font-bold ">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}


