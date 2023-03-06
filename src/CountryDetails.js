import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${alpha3Code}`,
      );
      setCountry(response.data);
    }

    fetchCountry();
  }, [alpha3Code]);

  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} alt={`${country.name} flag`} />
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Borders: {country.borders.join(', ')}</p>
    </div>
  );
}

export default CountryDetails;
