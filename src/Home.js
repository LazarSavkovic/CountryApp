import axios from 'axios';

import { Route, Routes } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import Header from './Header';
import CountryDetails from './CountryDetails';

export default function Home() {
  const url = `https://restcountries.com/v2/all`;
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const filter = countries.filter((country) => {
      if (country.name.toLowerCase().includes(input.toLowerCase())) {
        if (country.region === region) return country;
      }
    });

    setFilteredCountries(filter);
  }, [input, region]);

  useEffect(() => {
    getCountries();
  }, [url]);

  async function getCountries() {
    const data = await axios.get(url);
    setCountries(data.data);
    setFilteredCountries(data.data);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSelectChange(e) {
    setRegion(e.target.value);
  }

  function clickCard(country) {
    setSelectedCountry(country);
  }

  return (
    <>
      <Header
        handleSelectChange={handleSelectChange}
        handleChange={handleChange}
        input={input}
      />
      <Routes>
        <Route path="/countries/:country" component={<CountryDetails />} />
        <Route path="/">
          <div className="list">
            {filteredCountries.map((country) => (
              <div key={country.alpha3Code}>
                <CountryCard
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flag={country.flag}
                  onClick={clickCard}
                />
              </div>
            ))}
          </div>
        </Route>
      </Routes>
    </>
  );
}
