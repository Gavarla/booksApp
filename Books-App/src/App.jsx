import SideNav from './components/SideNav'
import './App.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
        <ToastContainer />
        <SideNav />
    </div>
  )
}

export default App
