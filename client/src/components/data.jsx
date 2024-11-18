import { useState, useEffect } from 'react';

export default function App() {
  const [Wine, setWine] = useState([]);

  useEffect(() => {
    async function getWine() {
      const response = await fetch('http://localhost:8080/wines');
      const data = await response.json();
      setWine(data);
      // console.log(data);
    }

    getWine();
  }, []);

  return (
    <div>
      <h1>Wines</h1>
      <div className="wine-container">
        {Wine.map((wine) => {
          return (
            <div key={wine.id} className="wine">
              <h3>{wine.town}</h3>
              <p>{wine.country}</p>
              <h4>Categories</h4>
              <ul>
                {wine.categories.map((name) => {
                  return <li key={name}>{name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
