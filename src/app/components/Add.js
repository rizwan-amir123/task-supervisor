"use client"
import { useState, useEffect } from "react";
import Modal from '../components/Modal.js'
import EditModal from '../components/EditModal.js'
const Add = () => {
    const [taskState, setTask] = useState([]);

    const deleteDBTask = (i) => {
      const p = taskState[i];
      const index = p._id;
      fetch("https://crud-api-six.vercel.app/task/"+index, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: index }),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData.message);
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });

      const newTasks = [...taskState];
      newTasks.splice(index, 1);
      setTask(newTasks);
    }

    const deleteAllTask = () => {
      const newTasks = [...taskState];
      newTasks.splice(0, newTasks.length);
      setTask(newTasks);
    }

    const editTask = (index) => {
      {/*
      const newTasks = [...taskState];
      const t = newTasks[index];
      t.id=999;
      newTasks.splice(index, 1, t);
      setTask(newTasks);
      */}
      setEditIndex(index);
      set_ShowEditModal(true);
    }

    const [showModal, setShowModal] = useState(false);
    const [show_EditModal, set_ShowEditModal] = useState(false);
    const [editIndex, setEditIndex] = useState(0);

    const fetchInfo = () => { 
      return fetch("https://crud-api-six.vercel.app/task/") 
              .then((res) => res.json()) 
              .then((d) => setTask(d)) 
      }
    useEffect(() => {
        fetchInfo();
      }, [taskState]);

    return (
      <section className="min-h-screen bg-gradient-to-r from-cyan-500 to-lime-400 px-10 
      text-white pt-2 pb-20 " id="add_hero">
        <Modal prop={taskState} propfunc={setTask} show_Modal={showModal} set_Modal={setShowModal} />
        <EditModal prop={taskState} propfunc={setTask} showEditModal={show_EditModal} 
            set_ShowEditModal={set_ShowEditModal} index={editIndex}/>
        <div className="container mx-auto grid md:grid-cols-1 items-center justify-center md:justify-between">
          <h1 className="text-4xl pt-5 pb-3 mt-5 ">
            Tasks List <br />
          </h1>
          <div className= "flex mt-2 mb-3 mr-10 pt-2 pb-2">
            <button onClick={() => setShowModal(true)} className="mr-3 bg-accent border-1 border-cyan 
            text-white 
            font-semibold shadow-lg rounded-lg px-4 py-1.5 bg-sky-700 hover:bg-sky-400 ease-linear 
            transition-all duration-150" type="button">
            Add
            </button>
            
            
            <button onClick={() => deleteAllTask()} className="bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg px-4 py-1.5 bg-sky-700 hover:bg-sky-400" type="button">
            Remove All
            </button>
          </div>
          <div className="container mx-auto text-lg grid md:grid-cols-1 gap-10">
            <div className="container bg-gradient-to-r from-lime-400 to-cyan-500 justify-left grid md:grid-cols-6 gap-10 mx-auto font-semibold text-blue-950">
              <p>Ticket Id</p>
              <p>Task</p>
              <p>Assigned To</p>
              <p>Tag</p>
              <p>Status</p>
            </div>


          {taskState.map((task, i) => {
            return (
                  <div className="relative overflow-y-auto container grid md:grid-cols-6 justify-center gap-10 mx-auto font-semibold text-blue-950" key={i}>
                    <p>{task.id}</p>
                    <p>{task.title}</p>
                    <p>{task.assignee}</p>
                    <p>{task.tag}</p>
                    <p>{task.status}</p>
                    <div className="flex gap-x-2">
                      <button onClick={() => editTask(i)} className="bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg py-1 px-3 text-sm bg-sky-700 hover:bg-sky-400">Edit</button>
                      <button onClick={() => deleteDBTask(i)} className="bg-accent border-1 border-cyan text-white 
            font-semibold shadow-lg rounded-lg py-1 px-3 text-sm bg-sky-700 hover:bg-sky-400">Remove</button>
                    </div>
                  </div>
            );
          })}
          </div>
        </div>
    </section>
    );
  };
  
export default Add;
