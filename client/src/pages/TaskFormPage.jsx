import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),

        });
      }
      navigate('/tasks ');
      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("series", task.series);
        setValue("repeticiones", task.repeticiones);
        setValue("peso", task.peso);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <Card>
      <h1 className="text-black-500 text-xl text-center">Rutina</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Ejercicio</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Please enter a title.</p>
        )}

        <Label htmlFor="series">Series</Label>

        <Input
          type="text"
          name="series"
          placeholder="ingrese las series realizadas"
          {...register("series")}

        />
        {errors.series && (
          <p className="text-red-500 text-xs italic ">Please enter a serires.</p>
        )}

        <Label htmlFor="repeticiones">Repeticiones</Label>

        <Input
          type="text"
          name="repeticiones"
          placeholder="ingrese las repeticiones de las series"
          {...register("repeticiones")}

        />
        {errors.repeticiones && (
          <p className="text-red-500 text-xs italic ">Please enter a serires.</p>
        )}

        <Label htmlFor="peso">Peso</Label>

        <Input
          type="text"
          name="peso"
          placeholder="Ingrese el pero con el que trabajo en kilos"
          {...register("peso")}

        />
        {errors.Peso && (
          <p className="text-red-500 text-xs italic ">Please enter a serires.</p>
        )}

        <Label htmlFor="description">Detalles</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Algo que agregar?"
          {...register("description")}
        ></Textarea>

        <Label htmlFor="date">Fecha de ejecucion de la rutina</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button>Guardar</Button>
      </form>
    </Card>
  );
}
