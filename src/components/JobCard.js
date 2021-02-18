import React from 'react';

function JobCard(props) {
  return (
    <div className='job-listing-card'>
      <div className='job-listing-card-top-information'>
        <div className='company-avatar'>
          <img src={props.avatar} alt={props.companyName} />
        </div>
        <div className='info-container'>
          <p>{props.companyName}</p>
          <h2 className='job-listing-card-title'>{props.position}</h2>
          <div className='row'>
            <p className='time-posted'>{props.timePosted}</p>
            <div className='specialisation-container'>
              {props.specialization}
            </div>
          </div>
        </div>
      </div>
      <div className='job-listing-card-bottom-information'>
        {props.techStack.map((tech, i) => {
          return (
            <span className='tech-stack-container' key={i}>
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default JobCard;
