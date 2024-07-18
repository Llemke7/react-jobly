import React, { useContext, useState } from 'react';
import JoblyApi from '../api';
import UserContext from '../auth/UserContext';

function JobCard({ id, title, salary, equity }) {
  const { currentUser } = useContext(UserContext);
  const [applied, setApplied] = useState(currentUser.applications.includes(id));

  async function handleApply() {
    if (applied) return;
    await JoblyApi.applyJob(id);
    setApplied(true);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={handleApply} disabled={applied}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
}

export default JobCard;
