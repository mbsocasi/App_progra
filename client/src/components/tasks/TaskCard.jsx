import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(task._id)}>Borrar</Button>
          {/* <ButtonLink to={`/tasks/${task._id}`}>editar</ButtonLink> */}
        </div>
      </header>
      <hr />
      <p className="text-slate-300">Series totales {task.series}</p>
      <p className="text-slate-300">Repectiones de las series {task.repeticiones}</p>
      <p className="text-slate-300">Peso trabajado en la serie {task.peso}</p>
      <hr />
      <p className="text-xm">Observaciones</p>

      <p className="text-slate-300">{task.description}</p>
      {/* format date */}
      <hr />
      <p className="text-xm">Fecha de realizacion</p>

      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
