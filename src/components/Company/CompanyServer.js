const API_URL = "http://localhost/empleados/";
const API_insertar = "http://localhost/empleados/?insertar=1";
const API_consultar = "http://localhost/empleados/?consultar=";
const API_actualizar = "http://localhost/empleados/?actualizar=";
const API_borrar = "http://localhost/empleados/?borrar=";

export const listCompanies = async () => {
  return await fetch(API_URL);
};

export const getCompany = async (companyId) => {
  return await fetch(`${API_consultar}${companyId}`);
};

export const registerCompany = async (newCompany) => {
  return await fetch(API_insertar, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: String(newCompany.nombre).trim(),
      correo: String(newCompany.correo).trim(),
    }),
  });
};

export const updateCompany = async (companyId, updatedCompany) => {
  return await fetch(`${API_actualizar}${companyId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: String(updatedCompany.nombre).trim(),
      correo: String(updatedCompany.correo).trim(),
    }),
  });
};

export const deleteCompany = async (companyId) => {
  return await fetch(`${API_borrar}${companyId}`, {
    method: "POST",
  });
};
