import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";


function CompanyList() {

  const [companies, setCompanies] = useState({
    isLoading: true,
    data: []
  });

  useEffect(function getCompaniesWhenMounted() {
    async function getCompanies() {
      const response = await JoblyApi.request("companies");
      setCompanies({
        isLoading: false,
        data: response.companies
      })
    }
    getCompanies();
  }, []);


  if (companies.isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <>
      <div>Search bar here</div>

      {companies.data.map(c => (
        <CompanyCard key={c.handle} company={c} />))
      }
    </>
  );
}

export default CompanyList;