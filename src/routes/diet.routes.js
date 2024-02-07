import { Router } from "express";
import {
  createDiet,
  deleteDiet,
  getDiet,
  getDiets,
  updateDiet,
} from "../controllers/diets.controller.js"; 
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createDietSchema } from "../schemas/diet.schema.js";  

const router = Router();

router.get("/diets", auth, getDiets);  

router.post("/diets", auth, validateSchema(createDietSchema), createDiet);

router.get("/diets/:id", auth, getDiet);

router.put("/diets/:id", auth, updateDiet);

router.delete("/diets/:id", auth, deleteDiet);

export default router;
