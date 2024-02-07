import { useDiets } from "../../context/dietsContext"; // Cambié el nombre del contexto
import { Button, ButtonLink, Card } from "../ui";

export function DietCard({ diet }) { // Cambié el nombre del componente
  const { deleteDiet } = useDiets(); // Cambié el nombre de la función y del contexto

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{diet.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteDiet(diet._id)}>Borrar</Button>  
          {/* <ButtonLink to={`/diets/${diet._id}`}>editar</ButtonLink>  */}
         </div>
      </header>
      <hr />
      <p className="text-slate-300">Calorias Diarias {diet.caloriasDiarias}</p>
      <p className="text-slate-300">Ingesta calorica {diet.ingestaCalorias}</p>
      <p className="text-slate-300">Peso Corporal {diet.pesoCorporal}</p>
      <hr />
       
      {/* format date */}
      <hr />
      <p className="text-xm">Fecha de ingesta</p>

      <p>
        {diet.date &&
          new Date(diet.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
