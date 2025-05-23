import React from 'react'
import logoImage from '../assets/dota2logo.png'
export default function Header(props) {
  return (
    <div className="header">
              <div className="header-content">
              <div className="logo-content">
                  <div className="image-container">
                      <img src={logoImage} alt="dota2logo" />
                  </div>
                  <div className="header-text">
                      <span>Dota 2 Heroes</span>
                      <h2>Memory Game</h2>
                  </div>
              </div>
              <div className="score-content">
                  <h2>Score: {props.score}</h2>
                  <h2>Best Score: {props.bestScore}</h2>
              </div>
          </div>
          <p>Test your memory! Click each heroes only once. If you click the same hero twice, the game resets. Try to select all Dota2 heroes without repeating any!</p>
          <style>
              {
              `
              .header-content {
                  background-color: #222;
                  color: #fff;
                  padding: 20px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 100%;
              }
              .logo-content {
                  display: flex;
                  align-items: center;
              }
              .image-container {
                  width: 150px;
                  height: 150px;
                  margin-right: 10px;
              } 
              .image-container img {
                  width: 100%;
                  height: 100%;
              }
              .header-text span {
                  font-family: 'Arial', sans-serif;
                  font-size: 1.3rem;
                  font-weight: 600;
              }
              .header-text h2 {
                  letter-spacing: 4px;
                  font-size: 2.6em;  
                  font-weight: 600;
              }
              .header{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  padding: 20px;
              }
              .header p {
                  text-align: center;
                  font-size: 1.2rem;
                  margin-top: 10px;
                  font-family: 'Arial', sans-serif;
                  font-size: 1.5rem;
                  margin: 24px 0;
                  font-weight: 600;
              }
              .score-content h2 {
                  margin: 0 10px;
                  font-size: 1.5rem;
              }
                  @media (max-width: 768px) {
                  .header-content {
                      flex-direction: column;
                      align-items: center;
                  }
                  .score-content {
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                      }
                          .score-content h2{
                              font-size: 1rem;
                          }
                      .logo-content {
                          flex-direction: column;
                          justify-content: center;
                          text-align: center;
                          align-items: center;
                      }
                      .image-container {
                        width: 50px;
                        height: 50px;
                        margin-bottom: 10px;
                      }
                      .header-text span {
                          font-size: 1.2rem;
                      }
                      .header-text h2 {
                          font-size: 1.5rem;
                      }
                      .header p {
                          font-size: 1rem;
                      }
              `
              }
          </style>
    </div>
    
  )
}
