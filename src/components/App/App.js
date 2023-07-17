import React from 'react';
import SearchForm from '../components/SearchForm/SearchForm'
import Favorites from '../Favorites/Favorites'; 


function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm />
      <Favorites />
    </div>
  );
}

export default App;
