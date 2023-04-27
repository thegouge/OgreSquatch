import { Outlet } from 'react-router-dom'
import './styles/App.css'
import { ToastContainer } from 'react-toastify'
import { Header, Footer } from './components'

export default function App() {
  return (
    <div className="App" data-test="App">
      <ToastContainer autoClose={8000} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
