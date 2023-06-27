import './App.css';
import BarChart from './BarChart';
import { useState, useEffect } from 'react' 
import * as d3 from 'd3'

function App() {
    const [data, setData] = useState([])
  
  useEffect(() => {
    d3.csv('./cities.csv')
      .then(data => {
        data.sort((a, b) => a.country < b.country)
        setData(data)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <BarChart data={data} />
      </header>
    </div>
  );
}

export default App;