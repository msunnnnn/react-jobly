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
    <div className="col-md-6 offset-md-3">
      {jobs.map(j => (
        <JobCard key={j.id} job={j} />))
      }
    </div>
  );

}

export default JobCardList;