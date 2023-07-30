import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../index'
import { server } from '../../App'

import axios from 'axios'
import './UserData.css'
import { toast } from 'react-hot-toast'
import TaskCard from '../TaskCard/TaskCard'
import { Navigate } from 'react-router-dom'


const UserData = () => {
  const { isAuth} = useContext(Context)


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [refes, setRefes] = useState(false)
  const [loading, setloading] = useState(false)
  const [task, setTask] = useState([])

  const taskHandler = async (e) => {
    e.preventDefault()
   

    try {
      setloading(true)
      const { data } = await axios.post(`${server}/task/createtask`,
        {
          title, description
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      )
      toast.success(data.message);
      setTitle('')
      setDescription('')
      setRefes((pre) => !pre)
      setloading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setloading(false);
      setRefes(false)

    }
  }


  const deleteTask = async (id) => {
    
    try {
     const {data}= await axios.delete(`${server}/task/deletetask/${id}`, { withCredentials: true })
      toast.success(data.message);
      setRefes((pre) => !pre)
     
    } catch (error) {
      toast.error(error.response.data.message);

    }
  }

  useEffect(() => {

    axios.get(`${server}/task/getalltask`, { withCredentials: true })
      .then((res) => {
        setTask(res.data.task)
        
      })
      .catch((error) => {
        toast.error(error.response.data.message);
     
      })
  }, [refes])

if(!isAuth) return <Navigate to={'/signup'} />
  return (

    <div className='UserData'>
      <h1>{user.name}</h1>
      <p>{user.email}</p>


      <div className='Signup'>
        <form onSubmit={taskHandler}>

          <input
            onChange={(e) => setTitle(e.target.value)}
            required
            value={title}
            type="text"
            placeholder='Enter your title'
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            setDescription
            value={description}
            type="text"
            placeholder='Enter your description'
          />

          <button disabled={loading} type='submit'>Create</button>
        </form>
        {/* <button onClick={ShowMyTask} className='showTask'>Show My Task</button> */}

      </div>

      <div>
        {
          task.map((item) => (
            <TaskCard
              title={item.title}
              description={item.description}
              id={item._id}
              key={item._id}
              deleteTask={deleteTask}
            />
          ))
        }
      </div>
    </div>


  )
}

export default UserData