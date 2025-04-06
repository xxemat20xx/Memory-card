import React from 'react'

export default function Loading() {
  return (
    <div>
        <div className="loader">
        <div className="loader-spinner">
                <img src="../src/assets/dota2logo.png" alt="" />
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
                `
            }
        </style>
    </div>
  )
}
