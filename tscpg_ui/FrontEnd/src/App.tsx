
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ShopBook from './component/ShopBook'
import Detail from './component/Detail'
import Navbar from './component/Navbar'
import FormPost from './component/FormPost'
import SetNewData from './component/SetNewData'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <>
        <Navbar></Navbar>
      <Routes>
         <Route path="/" element ={<ShopBook/>}/>
         <Route path="/hi/:id" element ={<Detail/>}/>
         <Route path="/for/admin/" element ={<FormPost/>}/>
         <Route path="/for/admin/edit/:id" element ={<SetNewData/>}/>
        
      </Routes>
       
      </>



    </BrowserRouter>
    </>
  )
}

export default App
