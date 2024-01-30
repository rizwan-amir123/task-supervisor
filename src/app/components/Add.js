"use client"
import { useState, useEffect } from "react";
import Modal from '../components/Modal.js'
import EditModal from '../components/EditModal.js'
const Add = () => {
    const [taskState, setTask] = useState([]);
    const [filter, setFilter] = useState("");
    const [showTagDropDown, setShowTagDropDown] = useState(false);
    const [showStatusDropDown, setShowStatusDropDown] = useState(false);
    const [showAssigneeDropDown, setShowAssigneeDropDown] = useState(false);

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
    }, []);

    const handleInputChange = (e) => {
      setFilter(e.target.value);
      if (e.target.value === "tag") {
        setShowTagDropDown(true);
        setShowAssigneeDropDown(false);
        setShowStatusDropDown(false);
      }
      if (e.target.value === "assignee") {
        setShowAssigneeDropDown(true);
        setShowStatusDropDown(false);
        setShowTagDropDown(false);
      }
      if (e.target.value === "status") {
        setShowStatusDropDown(true);
        setShowAssigneeDropDown(false);
        setShowTagDropDown(false);
      }
      if (e.target.value === "") {
        setShowStatusDropDown(false);
        setShowAssigneeDropDown(false);
        setShowTagDropDown(false);
        fetchInfo();
      }
    };

    const handleStatusFilterCall = (e) => {
      const link = "https://crud-api-six.vercel.app/task/status/" + e.target.value;
      return fetch(link) 
            .then((res) => res.json()) 
            .then((d) => setTask(d))
    };

    const handleTagFilterCall = (e) => {
      const link = "https://crud-api-six.vercel.app/task/tag/" + e.target.value;
      return fetch(link) 
            .then((res) => res.json()) 
            .then((d) => setTask(d))
    };

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
          <div className="justify-between flex mt-2 mb-3 mr-10 pt-2 pb-2">
            <div>
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
            <div>
            <div className="relative">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="text" id="table-search-users" className="block p-1 ps-10 text-sm 
                text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-100 
                focus:ring-blue-500 focus:border-blue-500" placeholder="Search table"/>
                
              </div>
            </div>
            <div>
              <div>
              
              <select value={filter} onChange={handleInputChange} className="py-1 px-2 mr-1 
              bg-gray-300 text-gray-900 text-sm" id="filter">
                <option value="">Filter By</option>
                <option value="assignee">By Assignee</option>
                <option value="tag">By Tag</option>
                <option value="status">By Status</option>
              </select>
              { showStatusDropDown ?  
              <select onChange={handleStatusFilterCall} className="py-1 px-2 bg-gray-300 text-gray-900 text-sm" id="status">
                
                <option value="pending">Pending</option>
                <option value="done">Done</option>
                <option value="unassigned">Unassigned</option>
                <option value="late">Late</option>
                <option value="processing">Processing</option>
              </select> : null
              }
              { showTagDropDown ? 
              <select onChange={handleTagFilterCall} className="py-1 px-2 bg-gray-300 text-gray-900 text-sm" id="tag">
                
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="devops">Devops</option>
              </select> : null
              }
              </div>
            </div>
          </div>
        </div>
        
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-200 uppercase bg-gray-900">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Ticket Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Task
                </th>
                <th scope="col" className="px-6 py-3">
                    Assignee
                </th>
                <th scope="col" className="px-6 py-3">
                    Tag
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
          </thead>
          <tbody>
            {taskState.map((task, i) => {
              return (<tr key={i} className="group odd:bg-emerald-400 even:bg-cyan-400 even:hover:bg-cyan-800 
              hover:text-white border-b text-gray-900 odd:hover:bg-emerald-800">
                <th scope="row" className="px-6 py-4 font-medium  
                whitespace-nowrap">
                    {task.id}
                </th>
                <td className="px-6 py-4">
                    {task.title}
                </td>
                <td className="px-6 py-4">
                    {task.assignee}
                </td>
                <td className="px-6 py-4">
                    {task.tag}
                </td>
                <td className="px-6 py-4">
                    {task.status}
                </td>
                
                <td className="flex flex-row space-x-3 px-6 py-4 text-blue-900 group-hover:text-white">
                    <button onClick={() => editTask(i)} className="font-medium 
                    hover:underline">Edit</button>
                    <button onClick={() => deleteDBTask(i)} className="mr-3 font-medium 
                    hover:underline">Remove</button>
                    {/*<a href="#" className="font-medium text-blue-900 hover:underline">View</a>*/}
                </td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      {/*
      <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-700 mb-4 md:mb-0 
        block w-full md:inline md:w-auto">Showing <span className="font-semibold 
        text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1000</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 
                leading-tight text-white bg-gray-900 border border-gray-700 rounded-s-lg 
                 hover:text-gray-400">Previous</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight 
                text-white bg-gray-900 border border-gray-700  hover:text-gray-400">1</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight 
                text-white bg-gray-900 border border-gray-700  hover:text-gray-400 
                ">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" className="flex items-center justify-center px-3 
                h-8 text-blue-600 border border-gray-700 bg-gray-900 hover:bg-blue-100 
                hover:text-blue-700">3</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight 
                text-white bg-gray-900 border border-gray-700  hover:text-gray-400 
                ">4</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight 
                text-white bg-gray-900 border border-gray-700  hover:text-gray-400 
                ">5</a>
            </li>
            <li>
        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-white 
        bg-gray-900 border border-gray-700 rounded-e-lg hover:bg-gray-900 hover:text-gray-400 
        ">Next</a>
            </li>
        </ul>
    </nav>
        */}


    </section>
    );
  };
  
export default Add;
