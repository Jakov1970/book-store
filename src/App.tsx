import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BookList } from './pages/BookList/BookList';

function App() {
  return (
    <div>
      <BookList />

        <Link to="/ce-book">
          <button>  
            Add new book
          </button>
        </Link>
    </div>
  );
}

export default App;
