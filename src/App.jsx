import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import Headers from './components/Header'
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHero, setSelectedHero] = useState([]);
  const [score, setScore] = useState(0);
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
  const displayedHeroes = data.slice(0, 8);
  const shuffledData = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setData(shuffled);
  }
  const flipCard = (hero) => {
    const card = document.querySelector(`.card[data-id="${hero.id}"]`);
    card.classList.toggle('flipped');
  }
  
  const handleClick = (hero) => {
    const heroId = hero.id;
    shuffledData();
    setSelectedHero(heroId);
    // Check if the hero has already been selected
    // If so, reset the game
    // If not, increase the score
    if (selectedHero.includes(heroId)) {
      alert("You have already selected this hero!");
      setScore(0);
      setBestScore(bestScore);
      setSelectedHero([]);
    }
    // If not, increase the score
    // and add the hero to the selected heroes
    else {
      setScore(score + 1);
      setSelectedHero([...selectedHero, heroId]);
    }
    // Check if the score is greater than the best score
    // If so, set the best score to the score
    if (score >= bestScore) {
      setBestScore(score);
    }
    
  }
  return (
    <>
   
    <Headers score={score} bestScore={bestScore} />
    <main>
        {displayedHeroes.map((hero) => (
             <div key={hero.id} className="card-container" onClick={() => handleClick(hero)}>
             <Cards name={hero.localized_name} img={`https://cdn.cloudflare.steamstatic.com${hero.img}`}/>
           </div>
        ))}
    </main>


    {/* Styling */}
    <style>
        {`
      body {
        background-color: #282c34;
        color: white;
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     
        margin: 0;
      }
        main {
        display: grid;
        grid-template-columns: repeat(4, minmax(150px, 1fr));
        gap: 20px;
        padding: 20px;
        }
        `
        }
    </style>
    </>
   
  )
}
