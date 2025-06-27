const express = require('express');
const router = express.Router();
const Calculation = require('../models/calculation');

// POST /add
router.post('/add', async (req, res) => {
  try {
    const { input_number, result_sum, result_words } = req.body;

    const newCalc = new Calculation({
      input_number,
      result_sum,
      result_words
    });

    await newCalc.save();
    res.status(200).send('Calculation saved');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// GET /latest
router.get('/latest', async (req, res) => {
  try {
    const results = await Calculation.find()
      .sort({ calculated_at: -1 })
      .limit(5);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
