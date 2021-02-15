import React from 'react';
import '../css/joblistings.css';
import { FaSearch, FaChartBar, FaCog, FaStream } from 'react-icons/fa';

function JobSearch() {
  return (
    <div className='card job-search-card'>
      <div className='job-search-header'>
        <div className='Typist'>
          SELECT <span className='color-primary'>*</span> FROM{' '}
          <span className='color-primary'>TECH JOBS</span> WHERE
        </div>
      </div>

      <div className='job-search-bar-container'>
        <div
          role='combobox'
          aria-haspopup='listbox'
          aria-owns='react-autowhatever-1'
          aria-expanded='false'
          className='react-autosuggest__container'
        >
          <input
            type='text'
            autocomplete='off'
            aria-autocomplete='list'
            aria-controls='react-autowhatever-1'
            className='react-autosuggest__input'
            placeholder='Try: Frontend, QA Engineer, React.js'
            value=''
          ></input>
          <div
            id='react-autowhatever-1'
            role='listbox'
            className='react-autosuggest__suggestions-container'
          ></div>
        </div>
        <button className='btn job-search-bar-button'>
          <FaSearch />
        </button>
      </div>
      <div>
        <p className='job-filter-tags-header'>FILTER BY...</p>
      </div>
      <div className='job-filter-tags-container'>
        <a className='job-filter-tag'>
          <FaChartBar /> Seniority
        </a>
        <a className='job-filter-tag'>
          <FaCog /> Specialisation
        </a>
        <a className='job-filter-tag'>
          <FaStream /> Tech Stack
        </a>
      </div>
    </div>
  );
}

export default JobSearch;
