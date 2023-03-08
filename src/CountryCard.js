import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
  const { name, flag, population, region, capital, alpha } = props;
  return (
    <Link to={`/${alpha}`}>
      <div className="card">
        <div className="flag">
          <img src={flag} alt="flag"></img>
        </div>
        <p>{name}</p>
        <p>{population}</p>
        <p>{region}</p>
        <p>{capital}</p>
      </div>
    </Link>
  );
}
