import React from 'react'
import './styles/App.css'
import { ToastProvider } from 'react-toast-notifications'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <ToastProvider>
      <div className="App" data-test="App">
        <Header />
        <main>main content!</main>
        <Footer />
      </div>
    </ToastProvider>
  )
}

export default App
