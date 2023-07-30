import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { server } from '../../App'
import { Context } from '../../index'
import toast from 'react-hot-toast'
import Loading from '../Loading/Loading';

const Login = () => {

  const { isAuth, setisAuth, loading, setloading } = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async (e) => {
    e.preventDefault()
    setloading(true)

    try {

      const { data } = await axios.post(`${server}/user/login`,
        {
          email, password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        }
      );
      toast.success(data.message);
      setisAuth(true);
      setloading(false);
      
    } catch (error) {
      toast.error(error.response.data.message);
      setisAuth(false);
      setloading(false);
    }
  }
if(isAuth) return <Navigate to={'/user'} />

  return (
    <div className='Signup'>

      <form onSubmit={loginHandler}>
        <h1>Login</h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
          type="email"
          placeholder='Enter your email'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
          type="password"
          placeholder='Enter your password'
        />

        <button disabled={loading} type='submit'>Login</button>
        <Link to='/signup'>Sign Up</Link>
      </form>
    </div>
  )
}

export default Login