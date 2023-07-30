import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom"
import './Signup.css';
import axios from 'axios';
import { server } from '../../App'
import { Context } from '../../index'
import toast from 'react-hot-toast'
// import Loading from './Components/Loading/Loading';


const Signup = () => {
    const naviagte = useNavigate()

    const { isAuth, setloading, setisAuth, loading } = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dataHandler = async (e) => {
        setloading(true)
        e.preventDefault()

        try {

            const { data } = await axios.post(`${server}/user/signup`,
                {
                    name, email, password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                }
            )
            toast.success(data.message);
            setisAuth(true);
            setloading(false);

        } catch (error) {
            toast.error(error.response.data.message);
            setisAuth(false);
            setloading(false);
        }

    }
    if (isAuth) return <Navigate to={'/user'} />

    return (
        <div className='Signup'>

            <form onSubmit={dataHandler}>
                <h1>Sign Up</h1>
                <input
                    onChange={(e) => setName(e.target.value)}
                    required
                    value={name}
                    type="text"
                    placeholder='Enter your Name'
                />
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

                <button disabled={loading} type='submit'>signup</button>
                <Link to='/login'>Log In</Link>
            </form>

        </div>
    )
}

export default Signup