import React from "react";
import * as CompanyServer from "./CompanyServer";
import { useNavigate } from "react-router-dom";

const CompanyItem = ({ company, listCompanies }) => {
  const navigate = useNavigate();
  //console.log(company);
  const handleDelete = async (companyId) => {
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card card-body">
          <h3 className="card-title">
            {company.nombre}
            <button
              onClick={() => navigate(`/updateCompany/${company.id}`)}
              className="btn btn-sm btn-info mx-2"
            >
              Editar
            </button>
          </h3>
          <p className="card-text">
            Correo: <strong>{company.correo}</strong>
          </p>
          <button
            onClick={() => company.id && handleDelete(company.id)}
            className="btn btn-danger my-2"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CompanyItem;
