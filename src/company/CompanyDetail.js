import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import JoblyApi from "../api";
import JobCard from "../job/JobCard";

/**
 * Displays company's details and company's job listings
 *
 * (Option: CompanyList ->) CompanyDetail-> JobCard
 */

function CompanyDetail() {

  //gets company handle from params
  const { name } = useParams();

  const [companyDetails, setCompanyDetails] = useState({
    isLoading: true,
    companyName: "",
    companyDescription: "",
    jobs: []
  });


  /** make API call to get company details */
  useEffect(function getCompanyDetailsWhenMounted() {
    async function getCompanyDetails() {
      const response = await JoblyApi.getCompany(name);
      setCompanyDetails({
        isLoading: false,
        companyName: response.name,
        companyDescription: response.description,
        jobs: response.jobs
      });
      console.log(response)
    }
    getCompanyDetails();
  }, [name]);
  //Line 30:
  //it gives an error if array is empty, googled it and saw to add the params in there
  //https://ui.dev/react-router-url-parameters



  if (companyDetails.isLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <>
    <h1>{companyDetails.companyName}</h1>
    <p>{companyDetails.companyDescription}</p>

      {companyDetails.jobs.map(c => (
        <JobCard key={c.id} job={c} />))
      }
    </>
  );

}

export default CompanyDetail;