import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
  const { name, flag, population, region, capital, alpha } = props;
  return (
    <Link style={{textDecoration: 'none'}} to={`/countries/${alpha}`}>
      <div className="card">
        <div className="cardFlag">
          <img src={flag} alt="flag"></img>
        </div>
        <div className='cardBody'>
        <p className='cardName'>{name}</p>
        <p className='cardText'>Population: {population}</p>
        <p className='cardText'>{region}</p>
        <p className='cardText'>Capital: {capital}</p>
        </div>
      </div>
    </Link>
  );
}
