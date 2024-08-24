import React from 'react';
import PizzaImg from '../Assets/Pizza.jpg';
import '../App.css';



// image, businessName, address, city, state, zipcode, category, rating, reviewCount






export const Business = ({img = [PizzaImg], name = "businessName", address = "address", city = "city", state = "state", zipcode = '02541', type = "greek", rating = "4.5", reviewCount = '95'}) => {

  return (
    <div style={{margin: '2rem auto', display: 'flex', flexDirection: 'column', height: 'fit-content'}}>
      <div style={{textAlign: 'left'}}>
        <img src={img} alt="pizza served on a nice table" style={{width: '20rem', height: '20rem'}}/>
        <h2>{name}</h2>
      </div>
      <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row'}}>
        <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 5}}>
        <p>{address}</p>
        <p>{city}</p>
        <p>{state} {zipcode}</p>
        </div>
        <div style={{flex: 1, textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 5}}>
          <h3 style={{color: '#f2c933', flex: .5}}>{type}</h3>
          <h4 style={{color: '#f2c933', flex: .5}}>{rating}</h4>
          <p style={{flex: .5}}>{reviewCount} Reviews</p>
        </div>
      </div>
    </div>
  )
}