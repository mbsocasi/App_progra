import Diet from "../models/diet.model.js";

export const getDiets = async (req, res) => {
  try {
    const diets = await Diet.find({ user: req.user.id }).populate("user");
    res.json(diets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDiet = async (req, res) => {
  try {
    const { title, caloriasDiarias, ingestaCalorias, pesoCorporal, date } = req.body;
    const newDiet = new Diet({
      title, caloriasDiarias, ingestaCalorias, pesoCorporal, date,
      user: req.user.id,
    });
    await newDiet.save();
    res.json(newDiet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDiet = async (req, res) => {
  try {
    const deletedDiet = await Diet.findByIdAndDelete(req.params.id);
    if (!deletedDiet)
      return res.status(404).json({ message: "Diet not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDiet = async (req, res) => {
  try {
    const {  title, caloriasDiarias, ingestaCalorias, pesoCorporal, date } = req.body;
    const dietUpdated = await Diet.findOneAndUpdate(
      { _id: req.params.id },
      { title, caloriasDiarias, ingestaCalorias, pesoCorporal, date },
      { new: true }
    );
    return res.json(dietUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDiet = async (req, res) => {
  try {
    const diet = await Diet.findById(req.params.id);
    if (!diet) return res.status(404).json({ message: "Diet not found" });
    return res.json(diet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
