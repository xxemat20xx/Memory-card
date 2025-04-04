import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import Headers from './components/Header'
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHero, setSelectedHero] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    fetch("https://api.opendota.com/api/heroStats")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data found</div>;
  }
  // shuffle the array
  const displayedHeroes = data.slice(0, 10);
  const shuffledData = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setData(shuffled);
  }
  const handleClick = (hero) => {
    const heroId = hero.id;
    shuffledData();
    setSelectedHero(heroId);
    console.log(selectedHero);

    if (selectedHero.includes(heroId)) {
      alert("You have already selected this hero!");
      setHighScore(0);
      setBestScore(Math.max(bestScore, highScore));
      setSelectedHero([]);
    }
    else {
      setHighScore(highScore + 1);
      setSelectedHero([...selectedHero, heroId]);
    }
    if (highScore >= bestScore) {
      setBestScore(highScore);
    }

  }
  return (
    <>
      <Headers highScore={highScore} bestScore={bestScore}/>
      {displayedHeroes.map((hero) => (
        <div key={hero.id} className="card-container" onClick={() => handleClick(hero)}>
          <Cards name={hero.localized_name} img={`https://cdn.cloudflare.steamstatic.com${hero.img}`}/>
        </div>
   
      ))}
    
    </>
  )
}
