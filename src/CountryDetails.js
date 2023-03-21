import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CountryDetails.css'

function CountryDetails() {
  const [countryData, setCountryData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`https://restcountries.com/v2/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, [id]);

  return (
    <div className='countryDetails'>

<Link style={{ textDecoration: 'none' }}  to="/"><span className='homeLink'>Back to home</span> </Link>
      {countryData && (
        <div className='detailsCard'>
          <h1>{countryData.name}</h1>
          <div className='detailsImg'>
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
          </div>
          <p>Population: {countryData.population}</p>
          <p>Region: {countryData.region}</p>
          <p>Capital: {countryData.capital}</p>
          <p>Area: {countryData.area}</p>
          <p>Subregion: {countryData.subregion}</p>

          <div>
            Borders: 
            {countryData.borders.map((code) => (

              <Link style={{ textDecoration: 'none' }} key={code} to={`/countries/${code}`}><span className='borderLink'>{code}</span> </Link>

            ))}
          </div>
        </div>
      )}
    </ div>
  );
}

export default CountryDetails;
