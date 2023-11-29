
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let infoObj = {
    isLoggedIn : true ,
    age : 22
  }

  let myArr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-xl mb-4">Tailwind css</h1>
      <Card username = "Arbaj" btnText = "Visit Me" getObj = {infoObj} />
      <Card username = "junaid" btnText = "Visit Bio" getArr = {myArr}/>
    </>
  )
}

export default App
