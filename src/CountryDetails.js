import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const [countryData, setCountryData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`https://restcountries.com/v2/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, []);

  return (
    <>
      {countryData && (
        <div>
          <h1>{countryData.name}</h1>
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <p>Population: {countryData.population}</p>
          <p>Region: {countryData.region}</p>
          <p>Capital: {countryData.capital}</p>
          <p>Area: {countryData.area}</p>
          <p>Subregion: {countryData.subregion}</p>

          <ul>
            Borders:
            {countryData.borders.map((code) => (
              <li key={code}>
                <Link to={`/${code}`}> {code}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
