import React from 'react';
import './CountryCard.css';

export default function CountryCard(props) {
  const { name, flag, population, region, capital } = props;
  return (
    <div className="card">
      <div className="flag">
        <img src={flag} alt="flag"></img>
      </div>
      <p>{name}</p>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
    </div>
  );
}
