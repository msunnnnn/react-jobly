import React from "react";
import { Link } from "react-router-dom";

/** CompanyCard component: lists basic info about a company
 *
 * Props:
 * - company
 *
 * Events:
 * - link to CompanyDetail
 *
 * CompanyList -> CompanyCard -> CompanyDetail
 */
function CompanyCard({ company }) {
  const { name, description, logoUrl, handle } = company;

  return (
    <Link to={`/companies/${handle}`} >
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={logoUrl} alt={name} />
      </div>
    </Link>
  );

}

export default CompanyCard;