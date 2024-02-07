import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useDiets } from "../context/dietsContext"; // Cambié el nombre del contexto
 import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function DietFormPage() { // Cambié el nombre de la página
  const { createDiet, getDiet, updateDiet } = useDiets(); // Cambié el nombre de las funciones y el contexto
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
        updateDiet(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createDiet({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }
      navigate('/diets'); // Cambié la ruta
      // navigate("/diets"); // Comenté la línea original
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadDiet = async () => {
      if (params.id) {
        const diet = await getDiet(params.id);
        setValue("title", diet.title);
        setValue("caloriasDiarias", diet.caloriasDiarias);
        setValue("ingestaCalorias", diet.ingestaCalorias);
        setValue("pesoCorporal", diet.pesoCorporal);
         setValue(
          "date",
          diet.date ? dayjs(diet.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", diet.completed);
      }
    };
    loadDiet();
  }, []);

  return (
    <Card>
      <h1 className="text-black-500 text-xl text-center">Ingesta Calorica</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Comida</Label>
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

        <Label htmlFor="caloriasDiarias">Calorias Diarias</Label>

        <Input
          type="text"
          name="caloriasDiarias"
          placeholder="Ingrese las Calorias diaras quemadas "
          {...register("caloriasDiarias")}
        />
        {errors.caloriasDiarias && (
          <p className="text-red-500 text-xs italic ">Please enter a serires.</p>
        )}

        <Label htmlFor="ingestaCalorias">Ingesta Calorica</Label>

        <Input
          type="text"
          name="ingestaCalorias"
          placeholder="ingrese las calorias ingestadas de las series"
          {...register("ingestaCalorias")}
        />
        {errors.ingestaCalorias && (
          <p className="text-red-500 text-xs italic ">Please enter a serires.</p>
        )}

        <Label htmlFor="pesoCorporal">pesoCorporal</Label>

        <Input
          type="text"
          name="pesoCorporal"
          placeholder="Ingrese su peso corporal"
          {...register("pesoCorporal")}
        />
        {errors.pesoCorporal && (
          <p className="text-red-500 text-xs italic ">Please enter a serires.</p>
        )}

        <Label htmlFor="date">Fecha de ejecucion de la rutina</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button>Guardar</Button>
      </form>
    </Card>
  );
}
