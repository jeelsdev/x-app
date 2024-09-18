import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />

      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default App
