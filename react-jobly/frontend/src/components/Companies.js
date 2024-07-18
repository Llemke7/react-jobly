import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import CompaniesList from './CompaniesList';
import SearchForm from './SearchForm';

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  async function search(term) {
    let companies = await JoblyApi.getCompanies(term);
    setCompanies(companies);
  }

  return (
    <div>
      <SearchForm searchFor={search} />
      <CompaniesList companies={companies} />
    </div>
  );
}

export default Companies;
