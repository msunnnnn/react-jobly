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
    <div className="col-md-8 offset-md-2">
      {jobs.map(j => (
        <JobCard key={j.id} job={j} />))
      }
    </div>
  );

}

export default JobCardList;