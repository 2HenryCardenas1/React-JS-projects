import './App.css'
import useFactsCats from './hooks/useFactsCats'
import CatImage from './components/CatImage'

function App() {

  const { fact, getFactAndUpdateState } = useFactsCats()

  const handleClick = async () => {

    getFactAndUpdateState()

  }


  return (
    <main>
      <h1>Prueba Tecnica Junior</h1>
      <button onClick={handleClick} >Get new fact</button>
      
      {fact && <p>{fact}</p>}
      <CatImage fact={fact} />
    </main>
  )
}

export default App
