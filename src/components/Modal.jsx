import React from 'react'

export default function Modal({message, onClose}) {
  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>{message}</h2>
            <button onClick={onClose}>Play Again</button>
        </div>
        <style>
            {
            `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.65);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .modal-content {
                background-color: transparent;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                color: #fff;
                font-size: 24px;
            }
            .modal-content h2 {
                margin: 0;
                font-size: 5rem;
                letter-spacing: 10px;
            }
            button{
                background-color:rgb(171, 49, 25);
                color: #fff;
                border: none;
                width: 400px;
                height: 80px;
                border-radius: 5rem;
                font-size: 1.5rem;
            }
            button:hover{
                background-color: rgb(104, 5, 5);
                cursor: pointer;
                transition: 0.3s;
            }
            button:active{
                transform: scale(0.95);
            }
            @media (max-width: 768px) {
                .modal-content h2 {
                    font-size: 3rem;
                }
                button{
                    width: 200px;
                    height: 50px;
                    font-size: 1rem;
                }
            `
            }
        </style>
    </div>
  )
}
