import './App.css';
import axios from 'axios';
import { useState } from 'react';
import QuoteCard from './components/QuoteCard';

function App() {
  const [quoteSimpson, setQuoteSimpson]= useState({})
  const getSimpsonquote = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => setQuoteSimpson (response.data[0])
    )}
  return (
    <div className="App">
      <button onClick={getSimpsonquote}>Get Simpson</button>
      <QuoteCard quoteSimpson = {quoteSimpson} />
    </div>
  );
}

export default App;
