import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("https://api.opendota.com/api/heroStats")
    .then((response) => {
      if(!response.ok){
        throw new Error("Network response was not ok.");
      }

      return response.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    })

  }, []);
  const shuffleArray = array => array.sort(() => Math.random() - 0.5);
  const handleCardClick = () => {
    return shuffleArray;
  }

  if(loading) return <p>Loading....</p>
  if(error) return <p>Error: {error}</p>
  return (
    <div className="cards">
        {shuffleArray(data).slice(0,10).map((hero, index) => (
          <div key={index} className="card-content">
         
              <img src={`https://cdn.cloudflare.steamstatic.com${hero.img}`} alt={hero.localized_name} onClick={handleCardClick}/>
              <h3>{hero.localized_name}</h3>
          </div>
        ))}
    </div>
  )
}
