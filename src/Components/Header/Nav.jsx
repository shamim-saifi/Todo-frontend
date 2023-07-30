import React, { useContext } from 'react';
import './Nav.css'
import { Link,Navigate } from 'react-router-dom'
import { server } from '../../App'
import { Context } from '../../index'
import toast from 'react-hot-toast'
import axios from 'axios';


const Nav = () => {

    const { isAuth, setisAuth, loading, setloading } = useContext(Context)


    const logoutHander = async () => {
        setloading(true)
        try {
            await axios.get(`${server}/logout`, { withCredentials: true })

            toast.success('LOGOUT SUCCESSFULLY');
            setisAuth(false);
            setloading(false);
            
        } catch (error) {
            toast.error(error.response.data.message);
            setisAuth(true);
            setloading(false);
        }

    }



    return (
        <>
            <div className='Home'>
                <h1>SHAMIM TODO.</h1>
                <div>

                    <Link to='https://shamim-saifi.vercel.app' target='_blank'>SHAMIM</Link>
                    {
                        isAuth ? <Link to='/user'>PROFILE</Link> : null

                    }
                    {
                        isAuth ?
                            (<button className='btn' disabled={loading} onClick={logoutHander}>LOTOUT</button>)
                            :
                            (<Link to='/signup'>SIGNUP</Link>)
                    }

                </div>

            </div>
        </>

    )
}

export default Nav