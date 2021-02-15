import React from 'react';
import '../css/joblistings.css';

function JobListingsHero() {
  return (
    <div>
      <div className='jobs-hero-container'>
        <h1 className='jobs-hero-header'>
          NodeFlair.<span className='color-secondary'>Jobs</span>
        </h1>
        <p className='jobs-hero-subheader'>
          Aggregated job listings from popular job sites and career pages
        </p>
      </div>
    </div>
  );
}

export default JobListingsHero;
