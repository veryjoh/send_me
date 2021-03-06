const knex = require("../database");

module.exports = {
  async getAllPhones(req, res) {
    try {
      const results = await knex("cellphone").select(
        "brand",
        "model",
        "color ",
        "photos"
      );
      res.status(200).send(results);
    } catch (error) {
      res.status(400).send(error);
    } finally {
      return res.json({
        message: "Please try again!",
      });
    }
  },

  async insertPhone(req, res) {
    try {
      const { brand, model, color, found_at, details, fair_shipp } = req.body;
      const photos = req.file.path ? req.file.path : "empy";
      await knex("cellphone").insert({
        brand,
        model,
        color,
        details,
        photos,
        found_at,
        fair_shipp,
      });
    } catch (error) {
      console.log(error);
    } finally {
      return res.status(201).json({
        message: "Cell Phone successfully registered thanks for colaborate <3",
      });
    }
  },
};
