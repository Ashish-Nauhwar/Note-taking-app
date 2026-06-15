import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import Footer from './components/Footer.jsx'
import { Route , Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateNote from './pages/Createnote.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='flex flex-col min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-indigo-950 text-white'>
      {/* Navbar route */}
     <Navbar/>

      {/*  main content */}
      <main className='flex-1 container mx-auto p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />

        </Routes>

      </main>

      {/* footer */}
      <Footer />

    </div>
  )
}

export default App
