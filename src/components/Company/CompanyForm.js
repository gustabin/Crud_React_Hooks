import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as CompanyServer from "./CompanyServer";

const CompanyForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  //console.log(params);

  const initialState = { id: 0, nombre: "", correo: "" };

  const [company, setCompany] = useState(initialState);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();
        if (data.message === "success") {
          setCompany(initialState);
        }
      } else {
        await CompanyServer.updateCompany(params.id, company);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      const { nombre, correo } = data[0];
      setCompany({ nombre, correo });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getCompany(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="col-md-3 mx-auto my-5">
        <h2 className="mb-3 text-center">Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={company.nombre}
              onChange={handleInputChange}
              className="form-control"
              minLength="2"
              maxLength="50"
              autoFocus
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="correo"
              id="correo"
              value={company.correo}
              onChange={handleInputChange}
              className="form-control"
              minLength="8"
              maxLength="50"
              required
            />
          </div>
          {params.id ? (
            <button type="submit" className="btn btn-primary w-100">
              Actualizar
            </button>
          ) : (
            <button type="submit" className="btn btn-success w-100">
              Incluir
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default CompanyForm;
