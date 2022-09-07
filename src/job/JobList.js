import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCardList from "./JobCardList";
import Search from "../common/Search";
import Loading from "../common/Loading";

/** JobList component: gets and lists jobs.
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

  if (jobs.isLoading) return <Loading />;

  return (
    <>
      <Search searchBy={searchJobs} />
      <JobCardList jobs={jobs.data} />
    </>
  );

}

export default JobList;