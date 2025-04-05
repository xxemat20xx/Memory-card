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
          .card{
            width: 200px;
            height: 200px;
            background-color: #444;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            cursor: pointer;
            transition: transform 0.2s;
          }
          `
        }
       </style>
    </>

  )

}

