import React from 'react';
import '../css/joblistings.css';
// import Autosuggest from 'react-autosuggest';
import JobListingsHero from './JobListingsHero';
import JobSearch from './JobSearch';
import JobList from './JobList';

function JobListingsView() {
  return (
    <div className='joblist'>
      <div className='jobs-hero-background'></div>
      <div className='container container-max-width'>
        <JobListingsHero />
        <JobSearch />
        <JobList />
      </div>
    </div>
  );
}

export default JobListingsView;
