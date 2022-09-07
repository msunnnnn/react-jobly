import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import JoblyApi from "../api";
import JobCardList from "../job/JobCardList";
import Loading from "../common/Loading";

/** CompanyDetail component: Displays company's details and company's job listings
 *
 * State:
 * - company
 *
 * Params:
 * - handle
 *
 * Effects:
 * - AJAX request to get company details
 *
 * { RoutesList, Option: CompanyList } -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {

  //gets company handle from params
  const { handle } = useParams();

  const [companyDetails, setCompanyDetails] = useState({
    isLoading: true,
    // companyName: "",
    // companyDescription: "",
    // jobs: []
    data: {}
  });
  // data: {}

  /** make API call to get company details */
  useEffect(function getCompanyDetailsWhenMounted() {
    async function getCompanyDetails() {
      const response = await JoblyApi.getCompany(handle);
      setCompanyDetails({
        isLoading: false,
        // companyName: response.name,
        // companyDescription: response.description,
        // jobs: response.jobs
        data: response
      });
      console.log(response);
    }
    getCompanyDetails();
  }, [handle]);
  //Line 30:
  //it gives an error if array is empty, googled it and saw to add the params in there
  //https://ui.dev/react-router-url-parameters

  if (companyDetails.isLoading) return <Loading />;

  const { name, description, jobs } = companyDetails.data;

  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>

      <JobCardList jobs={jobs} />
    </>
  );

}

export default CompanyDetail;