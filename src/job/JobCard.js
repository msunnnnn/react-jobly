import React from "react";

/** Displays job listings
 *
 * Prop
 * -job {title, companyName, salary, equity}, companyName could be empty
 *
 * { CompanyDetail, JobList } -> JobCard
*/
function JobCard({ job }) {
  const { title, companyName, salary, equity } = job;

  return (
    <>
      <h4>{title}</h4>
      <h5>{companyName}</h5>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </>
  );
}

export default JobCard;