import { useState ,useEffect } from 'react'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth'
import { logIn,logOut } from './store/authSlice'
import { Header,Footer } from './components'

 
import './App.css'

function App() {

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect( () => {
    authService.getCurrentUSer()
      .then((userData)=> {
        if(userData){
          dispatch(logIn({userData}))
        }else{
          dispatch(logOut())
        }
      } )
      .finally(() => setLoading(false))

  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className=' w-full block'>
        <Header/>
        <main>
          TODO:{/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : (null)
}

export default App
