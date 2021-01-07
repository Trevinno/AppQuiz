const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ThemeSchema = new Schema({
    theme: { type: String, required: true },
    picUrl: { type: String, required: true },
    points: { type: Number, required: true }
  }, {
    timestamps: true,
  });
  
  const Theme = mongoose.model('Theme', ThemeSchema);
  
  module.exports = Theme;