import React from 'react';

export default function Header(props) {
  const { input, handleChange, handleSelectChange } = props;
  return (
    <>
      <input type="text" onChange={handleChange} value={input}></input>
      <select onChange={handleSelectChange}>
        <option>Africa</option>
        <option>Americas</option>
        <option> Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
      ;
    </>
  );
}
