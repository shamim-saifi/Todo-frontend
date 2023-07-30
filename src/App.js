import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import { Toaster, toast } from 'react-hot-toast'
import UserData from './Components/User/UserData';
import { Context } from './index'
import { useContext, useEffect } from 'react';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Header/Nav';
import Login from './Components/Login/Login';
import Loading from './Components/Loading/Loading'
import axios from 'axios';



export const server = 'https://shamim-todo.onrender.com/api'

// export const server = 'http://localhost:9000/api'

function App() {
  const {  setisAuth,  setloading , setUser} = useContext(Context)


  useEffect(()=>{
    setloading(true)
    axios.get(`${server}/user/me`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setisAuth(true)
        setloading(false)
      })
      .catch((error) => {
        setUser({});
        setisAuth(false)
        setloading(false)
      })

  },[])

  return (
    <div className="App">
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/user' element={<UserData />} />
        </Routes>

        <Toaster />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
