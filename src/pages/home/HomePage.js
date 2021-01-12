import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/searchForm/SearchForm';

function HomePage() {
  return (
    <div>
      <h1>Home PAGE</h1>
      <SearchForm />
    </div>
  )
}

export default HomePage;