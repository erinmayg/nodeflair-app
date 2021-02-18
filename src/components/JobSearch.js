import React, { useState } from 'react';
import '../css/joblistings.css';
import { FaSearch, FaChartBar, FaCog, FaStream, FaTimes } from 'react-icons/fa';
import Select from 'react-select';

function JobSearch() {
  const seniorityOptions = [
    { value: 'mid', label: 'Mid' },
    { value: 'senior', label: 'Senior' },
    { value: 'lead', label: 'Lead' },
    { value: 'manager', label: 'Manager' },
    { value: 'director', label: 'Director' },
    { value: 'principal', label: 'Principal' },
    { value: 'intern', label: 'Intern' },
    { value: 'junior', label: 'Junior' },
  ];

  const specialisationOptions = [
    { value: 'fullstack', label: 'Full Stack Developer' },
    { value: 'backend', label: 'Backend Developer' },
    { value: 'frontend', label: 'Frontend Developer' },
    { value: 'mobile', label: 'Mobile Developer' },
    { value: 'dataeng', label: 'Data Engineer' },
    { value: 'datasci', label: 'Data Scientist' },
    { value: 'devops', label: 'DevOps Engineer' },
    { value: 'qa', label: 'QA Engineer' },
  ];

  const techStackOptions = [
    { value: 'java', label: 'Java' },
    { value: 'aws', label: 'AWS' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
  ];

  const [filterTagList, setFilterTagList] = useState([
    { name: 'Seniority', icon: <FaChartBar />, options: seniorityOptions },
    { name: 'Specialisation', icon: <FaCog />, options: specialisationOptions },
    { name: 'Tech Stack', icon: <FaStream />, options: techStackOptions },
  ]);
  const [filterList, setFilterList] = useState([]);

  const addFilter = (name, icon, options) => {
    setFilterList([
      ...filterList,
      { name: name, icon: icon, options: options },
    ]);
    const list = filterTagList;
    const toRemove = list.filter((x) => x.name === name)[0];
    list.splice(list.indexOf(toRemove), 1);
    setFilterTagList(list);
  };

  const removeFilter = (index) => {
    const list = [...filterList];
    const removed = list.splice(index, 1);
    setFilterList(list);
    setFilterTagList([...filterTagList, removed[0]]);
  };

  return (
    <div className='card job-search-card'>
      <div className='job-search-header'>
        <div className='Typist'>
          SELECT <span className='color-primary'>*</span> FROM{' '}
          <span className='color-primary'>TECH_JOBS</span> WHERE
          <span id='border'></span>
        </div>
      </div>

      <div className='job-search-bar-container'>
        <input
          type='text'
          autocomplete='off'
          placeholder='Try: Frontend, QA Engineer, React.js'
        ></input>
        <button className='btn job-search-bar-button'>
          <FaSearch />
        </button>
      </div>
      <div>
        {filterList.map((filter, i) => {
          return (
            <div className='job-filter-container' key={i}>
              <span className='job-filter-text'>AND</span>
              <span className='job-filter-tag'>
                {filter.icon} {filter.name}
              </span>
              <span className='job-filter-text'>IN (</span>
              <div className='flex'>
                <Select
                  className='job-filter-select__container'
                  options={filter.options}
                />
                <span className='job-filter-text'>)</span>
                <FaTimes
                  className='close-button'
                  onClick={(i) => removeFilter(i)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className='job-filter-tags-header'>FILTER BY...</p>
      </div>
      <div className='job-filter-tags-container'>
        {filterTagList.map((tag, i) => {
          return (
            <div
              className='job-filter-tag'
              onClick={() => addFilter(tag.name, tag.icon, tag.options)}
              key={i}
            >
              {tag.icon} {tag.name}
            </div>
          );
        })}
      </div>
      {filterList.length > 0 && (
        <div
          className='clear-button'
          onClick={() => {
            setFilterList([]);
            setFilterTagList([
              {
                name: 'Seniority',
                icon: <FaChartBar />,
                options: seniorityOptions,
              },
              {
                name: 'Specialisation',
                icon: <FaCog />,
                options: specialisationOptions,
              },
              {
                name: 'Tech Stack',
                icon: <FaStream />,
                options: techStackOptions,
              },
            ]);
          }}
        >
          CLEAR ALL
        </div>
      )}
    </div>
  );
}

export default JobSearch;
