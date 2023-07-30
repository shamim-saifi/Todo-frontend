import React, { useState,createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


export const Context = createContext({
  isAuth:false
})


const Wappper = () => {

  const [isAuth,setisAuth]=useState(false)
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({}) 


  return(
    <Context.Provider value={{
      isAuth,setisAuth,
      loading,setloading,
      user, setUser
    }}>
    <App />
  </Context.Provider>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wappper />
  </React.StrictMode>
);


