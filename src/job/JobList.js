import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";
import Search from "../common/Search";

/** JobList component: lists jobs.
 *
 * State:
 * - list of current/filtered jobs
 *
 * Effects:
 * - AJAX request to get jobs, either with or without search
 *
 * Functions:
 * - searchJobs: updates state for list of current/filtered jobs
 *
 * RoutesList -> JobList -> { JobCard, Search }
 *
 */
function JobList() {

  const [jobs, setJobs] = useState({
    isLoading: true,
    data: []
  });

  useEffect(function getJobsWhenMounted() {
    async function getJobs() {
      const response = await JoblyApi.request("jobs");
      setJobs({
        isLoading: false,
        data: response.jobs
      });
    }
    getJobs();
  }, []);


  async function searchJobs(searchTerm) {
    let data = searchTerm !== ''
      ? { title: searchTerm }
      : {};
    const response = await JoblyApi.request("jobs", data);

    setJobs({
      isLoading: false,
      data: response.jobs
    });
  }

  if (jobs.isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <>
      <Search searchBy={searchJobs} />

      {jobs.data.map(j => (
        <JobCard key={j.id} job={j} />))
      }
    </>
  );

}

export default JobList;