import axios from "./axios";

export const getDietsRequest = async () => axios.get("/diets"); // Cambié el nombre de la ruta

export const createDietRequest = async (diet) => axios.post("/diets", diet); // Cambié el nombre de la ruta y el objeto

export const updateDietRequest = async (diet) =>
  axios.put(`/diets/${diet._id}`, diet); // Cambié el nombre de la ruta y el objeto

export const deleteDietRequest = async (id) => axios.delete(`/diets/${id}`); // Cambié el nombre de la ruta

export const getDietRequest = async (id) => axios.get(`/diets/${id}`); // Cambié el nombre de la ruta
