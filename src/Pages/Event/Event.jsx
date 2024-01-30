import React from 'react'
import eventData from '../../Data/Event'

const Event = () => {
  return (
    <>
    <h1 className="main-heading">Events</h1>
    <div className="home-card-container">
    {eventData.map((data, index)=>{
            return (<div key={index} className="home-card">
                <img src={data.image} alt="event" />
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>)
          })}
    </div>
    </>
  )
}

export default Event