import { Outlet } from 'react-router-dom'
import './styles/App.css'
import { ToastProvider } from 'react-toast-notifications'
import { Header, Footer } from './components'

function App() {
  return (
    <ToastProvider>
      <div className="App" data-test="App">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}

export default App
