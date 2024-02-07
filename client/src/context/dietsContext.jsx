import { createContext, useContext, useState } from "react";
import {
  createDietRequest,
  deleteDietRequest,
  getDietsRequest,
  getDietRequest,
  updateDietRequest,
} from "../api/diets"; // Cambié los nombres de las funciones de la API

const DietContext = createContext();

export const useDiets = () => { // Cambié el nombre del hook
  const context = useContext(DietContext); // Cambié el nombre del contexto
  if (!context) throw new Error("useDiets must be used within a DietProvider"); // Cambié el mensaje de error
  return context;
};

export function DietProvider({ children }) { // Cambié el nombre del provider
  const [diets, setDiets] = useState([]); // Cambié el nombre del estado

  const getDiets = async () => {
    const res = await getDietsRequest(); // Cambié el nombre de la función de la API
    setDiets(res.data);
  };

  const deleteDiet = async (id) => {
    try {
      const res = await deleteDietRequest(id); // Cambié el nombre de la función de la API
      if (res.status === 204) setDiets(diets.filter((diet) => diet._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createDiet = async (diet) => {
    try {
      const res = await createDietRequest(diet); // Cambié el nombre de la función de la API
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDiet = async (id) => {
    try {
      const res = await getDietRequest(id); // Cambié el nombre de la función de la API
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDiet = async (id, diet) => {
    try {
      await updateDietRequest(id, diet); // Cambié el nombre de la función de la API
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DietContext.Provider
      value={{
        diets, // Cambié el nombre del estado
        getDiets, // Cambié el nombre de la función
        deleteDiet, // Cambié el nombre de la función
        createDiet, // Cambié el nombre de la función
        getDiet, // Cambié el nombre de la función
        updateDiet, // Cambié el nombre de la función
      }}
    >
      {children}
    </DietContext.Provider>
  );
}
