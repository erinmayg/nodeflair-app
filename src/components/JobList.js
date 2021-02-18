import React from 'react';
import JobCard from './JobCard';
import Select from 'react-select';
// import { FaBold } from 'react-icons/fa';

function JobList() {
  const options = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'mostRecent', label: 'Most Recent' },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'gray' : 'lightgray',
      fontWeight: 'bold',
      backgroundColor: state.isSelected ? 'lightgray' : 'none',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div>
      <div className='job-count-container'>
        <h2>3 jobs</h2>
        <div className='job-sort-by-container'>
          <h3>SORT BY</h3>
          <Select
            options={options}
            isSearchable={false}
            placeholder='Relevance'
            styles={customStyles}
            className='job-filter-select__container'
          />
        </div>
      </div>
      <div className='job-list-container'>
        <JobCard
          avatar='https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzZIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--31754c45ca3f4d5a816c8f43b853cedf8be60b4b/Apple.jpg'
          timePosted='1 minute ago'
          companyName='Apple'
          position='Data Engineer'
          specialization='Data'
          techStack={['Oracle', 'HDFS', 'Hive', 'Spark', 'yarn']}
        />
        <JobCard
          avatar='https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ21UIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4a34bcb984abb4039442899477a50dbbc0011076/Binance.png'
          timePosted='2 minutes ago'
          companyName='Binance'
          position='Backend Service Developer'
          specialization='Backend'
          techStack={['Spring', 'Java']}
        />
        <JobCard
          avatar='https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcldHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--af568e010d1aec6fa6548be6ee209cc9725f515f/Goldman%20Sachs.jpg'
          timePosted='3 minutes ago'
          companyName='Goldman Sachs'
          position='Fullstack Developer (Data Modelling)'
          specialization='Fullstack'
          techStack={['Anaytics', 'UDB', 'ORM', 'Apache']}
        />
      </div>
    </div>
  );
}

export default JobList;
