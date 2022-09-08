import React from "react";
import "./JobCard.css";

/** Displays job listings
 *
 * Prop
 * -job {title, companyName, salary, equity}, companyName could be empty
 *
 * JobCardList -> JobCard
*/
function JobCard({ job }) {
  const { title, companyName, salary, equity } = job;

  return (
    <div className="JobCard card container-fluid">
      <h6 className="card-title">{title}</h6>
      <p>{companyName}</p>
      <small className="card-text">Salary: {salary}</small>
      <small className="card-text">Equity: {equity}</small>
    </div>
  );
}

export default JobCard;