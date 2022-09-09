import React from "react";
import "./JobCard.css";

import JoblyApi from "../api";
import { useContext } from "react";
import userContext from "../userContext";

/** Displays job listings
 *
 * Prop
 * -job {title, companyName, salary, equity}, companyName could be empty
 *
 * JobCardList -> JobCard
*/
function JobCard({ job }) {
  const user = useContext(userContext);
  const { id, title, companyName, salary, equity } = job;

  async function apply() {
    await JoblyApi.request(`users/${user.username}/jobs/${id}`, {}, "post");
  }

  return (
    <div className="JobCard card container-fluid">
      <h6 className="card-title">{title}</h6>
      <p>{companyName}</p>
      <small className="card-text">Salary: {salary}</small>
      <small className="card-text">Equity: {equity}</small>
      <button onClick={apply} className="btn btn-info apply text-white">Apply</button>
    </div>
  );
}

export default JobCard;