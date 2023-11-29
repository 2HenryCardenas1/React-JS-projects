import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleClick = () => {
    setEnable(!enable)
  }

  useEffect(() => {
    const handleEvent = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleEvent)
    }
    // Clean up
    return () => {
      window.removeEventListener('pointermove', handleEvent)
    }
  }, [enable])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={handleClick}>
        {enable ? 'Activado' : 'Desactivado'}
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />

    </main>
  )
}

export default App
