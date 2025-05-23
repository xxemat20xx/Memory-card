import React from 'react'
import image from '../assets/dota2logo.png'

export default function Loading() {
  return (
    <div>
        <div className="loader">
        <div className="loader-spinner">
                <img src={image} alt="dota2logo" />
            </div>
            <div className="loader-text">Loading...</div>
           

        </div>
        <style>
            {
                `
                @import url('https://fonts.googleapis.com/css2?family=Boldonse&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
                body {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .loader {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: black;
                    color: #fff;
                   
                }
                .loader-text {
                    font-size: 4rem;
                    margin-left: 20px;
                    font-family: "Boldonse", system-ui;
                }
                .loader-spinner {
                    width: 150px;
                    height: 150px;
                    animation: spin 1s linear infinite;
                }
                .loader-spinner img {
                    width: 100%;
                    height: 100%;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                   @media (max-width: 768px) {
                .modal-content h2 {
                    font-size: 3rem;
                }
                .loader-text {
                    font-size: 2rem;
                    margin-left: 20px;
                    font-family: "Boldonse", system-ui;
                }
                .loader-spinner{
                    width: 50px;
                    height: 50px;
                    font-size: 1rem;
                }
                .loader-spinner img {
                    width: 100%;
                    height: 100%;
                }
                `
            }
        </style>
    </div>
  )
}
