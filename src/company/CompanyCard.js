import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

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
  console.log(company)

  return (
    <Link to={`/companies/${handle}`} className="CompanyCard card container-fluid">
      <h6 className="card-title">{name}
        {logoUrl && <img src={logoUrl} alt={name} className="float-end ms-5" />}
      </h6>
      <p className="card-text">{description}</p>
    </Link>
  );

}

export default CompanyCard;