import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import JobCard from './JobCard';

function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  return (
    <div>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
        />
      ))}
    </div>
  );
}

export default JobsList;

