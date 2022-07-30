const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    cooking_time: { type: String, required: true },
    challenge: { type: String, required: true },
    author: { type: String, required: true },
});

module.exports = mongoose.model('recipe', recipeSchema);