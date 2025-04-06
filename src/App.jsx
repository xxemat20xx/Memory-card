import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import Headers from './components/Header'
import Modal from './components/Modal'
import Loading from './components/Loading'
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHero, setSelectedHero] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    return <Loading />;
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
  
  const handleClick = (hero) => {
    const heroId = hero.id;
  
    // Shuffle the data first
    shuffledData();

    if (selectedHero.includes(heroId)) {

      setIsModalOpen(true);
    
      setBestScore((prevBestScore) => Math.max(score, prevBestScore));
      setScore(0);
      setSelectedHero([]);
   
    } else {

      setScore((prevScore) => prevScore + 1);
      setBestScore((prevBestScore) => Math.max(score + 1, prevBestScore));
      setSelectedHero((prevSelected) => [...prevSelected, heroId]);
    }

  };
  
  return (
    <>
   
    <Headers score={score} bestScore={bestScore} />
    <main>
        {isModalOpen && (
          <Modal
            message="Game Over, Try Again!"
            onClose={() => {
              setIsModalOpen(false);
              setScore(0);
              setSelectedHero([]);
              shuffledData();
            }}
          />
        )}
        {displayedHeroes.map((hero) => (
             <div key={hero.id} className="card-container" onClick={() => handleClick(hero)}>
             <Cards name={hero.localized_name} img={`https://cdn.cloudflare.steamstatic.com${hero.img}`}/>
           </div>
        ))}
    </main>


    {/* Styling */}
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Boldonse&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Boldonse", system-ui;
            font-weight: 400;
            font-style: normal;
        }
          
        #root {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
      body {
        background-image: url('../src/assets/dota2bg2.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
       
        color: white;
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        }
        body:after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: -1;
        }
        main {
        display: grid;
        grid-template-columns: repeat(4, minmax(150px, 1fr));
        gap: 20px;
        padding: 20px;
        }
       
        .card {
            width: 250px;
            height: 250px;
            background-color: #444;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            cursor: pointer;
            transition: transform 0.2s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
            border: 1px solid #fff;
        }
        .card:hover {
            transform: scale(1.05);
        }
          @media (max-width: 768px) {
            main {
                grid-template-columns: repeat(2, 1fr);
            }
            .card {
                width: 150px;
                height: 150px;
            }

            .card img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
            .card h3 {
                font-size: 16px;
            }
        `
        }
    </style>
    </>
   
  )
}
