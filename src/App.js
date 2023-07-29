import { useEffect, useState } from 'react'
import { StarShipsList } from './components/StarShipsList'
import { getAllStarships } from './services/sw-api'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [starShips, setStarships] = useState([])

  useEffect(() => {
    const getShips = async function(){
      const res = await getAllStarships()
      const allStar = await res.json()
      
      setStarships(allStar.results)
    }
    getShips()
}, [])
  return (
    <div className="star-spacing">
      <div className="star-header">
        <h1>STAR WARS STARSHIPS</h1>
      </div>
      <StarShipsList 
        starShips = {starShips}
      />
    </div>
  );
}
export default App;