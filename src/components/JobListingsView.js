import React from 'react';
import '../css/joblistings.css';
import Autosuggest from 'react-autosuggest';
import JobListingsHero from './JobListingsHero';
import JobSearch from './JobSearch';

function JobListingsView() {
  return (
    <div className='JobListingsView'>
      <div className='jobs-hero-background'></div>
      <div className='container container-max-width'>
        <JobListingsHero />
        <JobSearch />
      </div>
    </div>
  );
}

export default JobListingsView;
