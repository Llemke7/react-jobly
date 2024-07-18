import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ handle, name, description }) {
  return (
    <div>
      <h3><Link to={`/companies/${handle}`}>{name}</Link></h3>
      <p>{description}</p>
    </div>
  );
}

export default CompanyCard;
