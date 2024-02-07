import { useEffect } from "react";
import { useDiets } from "../context/dietsContext"; // Cambié el nombre del contexto
import { DietCard } from "../components/diets/DietCard"; // Cambié el nombre del componente
import { ImFileEmpty } from "react-icons/im";

export function DietsPage() { // Cambié el nombre de la página
  const { diets, getDiets } = useDiets(); // Cambié el nombre del estado y la función de obtener

  useEffect(() => {
    getDiets();
  }, []);

  return (
    <>
      {diets.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No hay progreso tu dieta ... inicia YA!!!
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {diets.map((diet) => ( // Cambié el nombre de la variable
          <DietCard diet={diet} key={diet._id} /> // Cambié el nombre de la variable
        ))}
      </div>
    </>
  );
}
