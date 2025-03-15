import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import LeftPanel from './components/LeftPanel.jsx'
import RightPanel from './components/RightPanel.jsx'
import PostContainer from './components/PostContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LeftPanel />
      <RightPanel />
      <PostContainer />
    </>
  )
}

export default App
