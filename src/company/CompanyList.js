import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import Search from "../common/Search";


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

  async function searchCompanies(searchTerm) {
    let data = searchTerm !== ''
             ? {name: searchTerm}
             : {};
    const response = await JoblyApi.request("companies", data);

    setCompanies({
      isLoading: false,
      data: response.companies
    });
  }

  if (companies.isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <>
      <Search searchBy={searchCompanies}/>

      {companies.data.map(c => (
        <CompanyCard key={c.handle} company={c} />))
      }
    </>
  );
}

export default CompanyList;