import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Count from './components/Count/Count';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const [count, setCount] = useState([]);
  const handleAddBtn = (country) => {
    const newCount = [...count, country];
    setCount(newCount);
  }

  const countryLimit = countries.slice(0,30)
  return (
    <div>
      <div className="counting">
        <h2>Country added: {count.length}</h2>
        <Count count={count}></Count>
      </div>
    {
      countryLimit.map(country => <Countries handleAddBtn={handleAddBtn} country={country} key={country.numericCode}></Countries>)
    }
      
    </div>
  );
}

export default App;
