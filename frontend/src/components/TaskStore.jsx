import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function TaskStore() {
  const [tasks, setTasks] = useState([]);
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await axios.get('http://localhost:3000/j');
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
      fetchTasks();
      const Interval = setInterval(fetchTasks, 1000);
      return () => clearInterval(Interval); // Fetch tasks every 2 seconds
    }, []);



  const DeleteData = async(id)=>{
      try{
        const Data = await axios.delete(`http://localhost:3000/DeleteData/${id}`)
        setTasks((prevTask) => prevTask.filter(task => task._id !== id))
        alert(Data.data.message) 
      }
      catch(error){
        alert('Data Deletion Failed')
        console.log(error);
      }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Task List</h2>

        {tasks.map((task, index) => (
          <li key={index} className="p-3 bg-gray-100 rounded-lg shadow mb-2 w-100vw">
            {task.Task} – {task.Time} – {task.Date}<button type='submit' onClick={() => DeleteData(task._id)} className ="ml-2 text-red-500 right-0 " >Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TaskStore;
