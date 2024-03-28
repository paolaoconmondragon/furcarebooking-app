import { BrowserRouter } from "react-router-dom"
import FurCareRoutes from './routes/FurCareRoutes'
import Navbar from "./components/Navbar"
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
            <div className="row flex-nowrap">
              <Navbar/>
              <FurCareRoutes/>
            </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
