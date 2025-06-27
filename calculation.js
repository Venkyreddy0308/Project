// models/Calculation.js
const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema({
  input_number: {
    type: Number,
    required: true
  },
  result_sum: {
    type: Number,
    required: true
  },
  result_words: {
    type: String,
    required: true
  },
  calculated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Calculation', CalculationSchema);
