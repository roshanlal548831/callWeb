import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate = useNavigate()

  const[roomCode,setRoomCode] = useState(null)
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    navigate(`/room/${roomCode}`)
  }
  return (
    <div className='flex justify-center items-center text-center w-full h-screen bg-pink-200'>
        <form action="" className='form h-96 w-96 bg-white shadow-emerald-700 rounded  flex justify-center items-center text-center' onSubmit={handleFormSubmit}>
             <div className=' items-center text-center'>
                  <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} type="text" name="" required id="code" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Enter any text'/>
               <button className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2 dark:border-pink-200 pink:text-gray-400 dark:hover:text-white dark:hover:bg-pink-500 dark:focus:ring-gray-800' type='submit'>Join</button>
             </div>
        </form>
    </div>
  )
}

export default Home
