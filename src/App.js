import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/countries/:id" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
