import React, { useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ articles, setArticles }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigateTo = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchValue)
    );

    setArticles(filteredArticles);
    navigateTo('/articles');
  };

  return (
    <div className='header-container'>
      <form className='search-form'>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className='search-input'
        />

        <button
          type='submit'
          className='search-button'
          onClick={searchHandler}
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default Header;







/*
import React, { useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ articles, setArticles }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigateTo = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchValue)
    );

    console.log(filteredArticles);
    setArticles(filteredArticles);
    navigateTo('/articles');
  };

  return (
    <div className='w-[100vw] h-14 bg-gray-100 flex items-center relative'>
      <form className='mx-auto w-auto flex'>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className='w-100 h-10 py-2 px-4 tracking-widest outline-slate-50 capitalize text-gray-400 rounded bg-white block'
        />

        <button
          type='submit'
          className='py-2 px-4 rounded ml-2 capitalize bg-gray-800 text-white'
          onClick={searchHandler}
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default Header;
*/