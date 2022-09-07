import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";
import Search from "../common/Search";

function JobList(){

  const [jobs, setJobs] = useState({
    isLoading: true,
    data : []
  })

  useEffect(function getJobsWhenMounted() {
    async function getJobs() {
      const response = await JoblyApi.request("jobs");
      setJobs({
        isLoading: false,
        data: response.jobs
      })
    }
    getJobs();
  }, []);


  async function searchJobs(searchTerm) {
    let data = searchTerm !== ''
             ? {name: searchTerm}
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
      <Search searchBy={searchJobs}/>

      {jobs.data.map(j => (
        <JobCard key={j.id} job={j} />))
      }
    </>
  );

}

export default JobList;