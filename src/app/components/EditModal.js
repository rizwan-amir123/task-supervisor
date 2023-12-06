import { useState } from "react";
export default function EditModal({prop, propfunc, showEditModal, set_ShowEditModal, index}) {
    const [id, setId] = useState("");
    const [task, setTaskDescr] = useState("");
    const [assignee, setAssignee] = useState("");
    const [tag, setTag] = useState("");
    const [status, setStatus] = useState("");

    
    const handleIdInput = (e) => {
      setId(e.target.value);
    };
    const handleTaskInput = (e) => {
      setTaskDescr(e.target.value);
    };
    const handleAssigneeInput = (e) => {
        setAssignee(e.target.value);
    };
    const handleTagInput = (e) => {
        setTag(e.target.value);
    };
    const handleStatusInput = (e) => {
        setStatus(e.target.value);
    };
    const handleClear = (e) => {
        setStatus("");
        setTag("");
        setAssignee("");
        setTaskDescr("");
        setId("");
    };
    const handleDBEdit = () => {
      if (task === "" || id === "" || tag === "" || status === "" || assignee === "") {
        alert("One or more field values is empty");
        return;
      }
      const p = prop[index];
      const otherindex = p._id;

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: id,
          title: task,
          assignee: assignee,
          tag: tag,
          status: status })
      };
      fetch("http://localhost:8000/task/" + otherindex, requestOptions)
        .then(response => response.json())
        .then(data => {
          const newTasks = [...prop];
          const t = newTasks[index];
          t.id = id;
          t.title = task;
          t.assignee = assignee;
          t.tag = tag;
          t.status = status;
          propfunc(newTasks);
    });
    };


  return (
    <>
      {showEditModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Edit Task
                  </h3>
                  <button
                    className="text-white background-transparent font-semibold px-6 py-2 text-md outline-none hover:font-bold hover:text-blue-950"
                    type="button"
                    onClick={() => handleClear()}
                  >
                    Clear All
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <div className="pb-5 grid grid-cols-2 gap-y-3 m-2 p-2 md:pb-0">
                        <label htmlFor="id-input" className="my-3 block mb-2 text-lg font-semibold text-gray-900 
                        dark:text-white">Id</label>
                        <input
                            type="text"
                            id="id-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={id}
                            onChange={(e) => handleIdInput(e)}
                        ></input>

                        <label htmlFor="task-input" className="my-3 block mb-2 text-lg font-semibold text-gray-900 
                        dark:text-white">Task</label>
                        <input
                            type="text"
                            id="task-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={task}
                            onChange={(e) => handleTaskInput(e)}
                        ></input>

                        <label htmlFor="assignee-input" className="my-3 block mb-2 text-lg font-semibold text-gray-900 
                        dark:text-white">Assignee</label>
                        <input
                            type="text"
                            id="assignee-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={assignee}
                            onChange={(e) => handleAssigneeInput(e)}
                        ></input>

                        <label htmlFor="tag-input" className="my-3 block mb-2 text-lg font-semibold text-gray-900 
                        dark:text-white">Tag</label>
                        <input
                            type="text"
                            id="tag-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={tag}
                            onChange={(e) => handleTagInput(e)}
                        ></input>

                        <label htmlFor="status-input" className="my-3 block mb-2 text-lg font-semibold text-gray-900 
                        dark:text-white">Status</label>
                        <input
                            type="text"
                            id="status-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={status}
                            onChange={(e) => handleStatusInput(e)}
                        ></input>
                    </div>
                </div>
                
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blue-200 rounded-b">
                  <button
                    className="text-white background-transparent font-semibold uppercase px-6 py-2 text-md outline-none hover:font-bold hover:text-blue-950"
                    type="button"
                    onClick={() => set_ShowEditModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mr-3 bg-accent border-1 border-cyan text-white 
                    font-semibold shadow-lg rounded-lg px-6 py-3 bg-sky-700 hover:bg-sky-400"
                    type="button"
                    onClick={() => handleDBEdit()}
                  >
                    Edit Task
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
