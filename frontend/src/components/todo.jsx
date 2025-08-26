import React, { useState } from 'react';
import axios from 'axios'

function Todo() {

  const [Task, setTask] = useState('')
  const [Time, setTime] = useState('')
  const [Date, setDate] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!Time||!Date||!Task){
      
      return alert("Input Data is Required")
    }


    try {
      const response = await axios.post(
        'http://localhost:3000/', {
        Task, Time, Date
      })
      if (response.status === 200) {
        alert("Data Saved")
      }
    } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="h-auto flex flex-col items-center justify-start bg-white py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">📝 Todo List</h1>

    <div className="bg-gray-600 w-[90%] sm:w-[70%] md:w-[40%] p-6 rounded-2xl shadow-xl">
      <form onSubmit={handleSubmit} className='space-y-4 mb-6'>
        <input
          type="text"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter first task..."
          className="w-full h-10 px-4 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter second task..."
          className="w-full h-10 px-4 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          value={Date}
          onChange={e => setDate(e.target.value)}
          placeholder="Enter second task..."
          className="w-full h-10 px-4 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button type='submit' className="w-full h-10 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200">
          Submit
        </button>
      </form>
    </div>
  </div>
);
}

export default Todo;
