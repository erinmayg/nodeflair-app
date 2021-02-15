import React from 'react';
import JobCard from './JobCard';

function JobList() {
  return (
    <div>
      <div className='job-count-container'>
        <h2>3 jobs</h2>
        <div className='job-sort-by-container'>
          <h3>SORT BY</h3>
          <select className='select-container' placeholder='Relevance'>
            <option value='relevance'>Relevance</option>
            <option value='most-recent'>Most recent</option>
          </select>
        </div>
      </div>
      <div className='job-list-container'>
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default JobList;
