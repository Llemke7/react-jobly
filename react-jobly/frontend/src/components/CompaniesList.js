import React from 'react';
import CompanyCard from './CompanyCard';

function CompaniesList({ companies }) {
  return (
    <div>
      {companies.map(company => (
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
        />
      ))}
    </div>
  );
}

export default CompaniesList;
