import React from 'react';

function JobCard(props) {
  return (
    <div className='job-listing-card'>
      <div className='job-listing-card-top-information'>
        <div className='company-avatar'>
          <img src='https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBakdUIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e6301ecb8aaa6c859f5828e319a20a5eafa5f3ce/EPAM%20Systems.png' />
        </div>
        <div className='info-container'>
          <p>Company Name</p>
          <h2 className='job-listing-card-title'>Position Title</h2>
          <div className='row'>
            <p className='time-posted'>Time posted</p>
            <div className='specialisation-container'>Spec</div>
          </div>
        </div>
        <div className='job-listing-card-bottom-information'>
          <span className='tech-stack-container'>Hoho</span>
          <span className='tech-stack-container'>Hoho</span>
          <span className='tech-stack-container'>Hoho</span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
