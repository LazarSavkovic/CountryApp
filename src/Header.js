import React from 'react';

export default function Header(props) {
  const { input, handleChange, handleSelectChange } = props;
  return (
    <div className='header'>

      <input className='textInput' name='filter' type="text"  placeholder='Filter by name' onChange={handleChange} value={input}></input>
      <select className='selectInput' onChange={handleSelectChange}>
        <option>Africa</option>
        <option>Americas</option>
        <option> Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}
