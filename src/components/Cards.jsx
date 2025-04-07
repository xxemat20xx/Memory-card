import React from 'react'

export default function Cards(props) {
  return (
    <>
        <div className='card'>
            <div className="image-content">
                <img src={props.img} alt={props.img} />
            </div>
            <h3>{props.name}</h3>
       </div>
       <style>
        {
          `
          .image-content {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .image-content img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
            .card h3{
             letter-spacing: 3px;
            }
          .card {
            width: 150px;
            height: 150px;
            background-color: #444;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            padding: 8px;
            cursor: pointer;
            transition: transform 0.2s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
            border: 1px solid #fff;
        }
            .card h3{
              font-size: 12px;
            }
             @media (max-width: 768px) {
            main {
                grid-template-columns: repeat(2, 1fr);
            }
            
          `
        }
       </style>
    </>

  )

}

