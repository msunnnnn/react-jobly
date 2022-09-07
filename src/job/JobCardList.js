import React from "react";
import JobCard from "./JobCard";

/** JobCardList component: lists job cards.
 *
 * Props:
 * - list of jobs
 *
 * { JobList, CompanyDetail} -> JobList -> JobCard
 *
 */
function JobCardList({ jobs }) {

  return (
    <>
      {jobs.map(j => (
        <JobCard key={j.id} job={j} />))
      }
    </>
  );

}

export default JobCardList;