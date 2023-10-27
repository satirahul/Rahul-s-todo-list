"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }
  let renderTask = <h2>No Data Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className=" flex items-center justify-between">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-xl font-medium">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className="bg-black text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-center font-bold p-5 text-5xl">
        Rahul's todo list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-4 border-zinc-800 m-4 px-4 py-2"
          placeholder="enter task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="text-2xl border-4 border-zinc-800 m-4 px-4 py-2"
          placeholder="enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <button className="bg-black text-white font-bold rounded px-4 py-3 m-5 ">
          add task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-400">
        <ul className="text-3xl">{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
