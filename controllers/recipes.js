const Recipe = require('../models/recipes');

exports.createRecipe = (req, res, next) => {
    const recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        cooking_time: req.body.cooking_time,
        challenge: req.body.challenge,
        author: req.body.author
    });
    recipe.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAnyMoreRecipe = (req, res, next) => {
    const limit = req.params.limit;
    Recipe.find().limit(limit).then(
        (recipe) => {
            res.status(200).json(recipe);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.updateRecipe = (req, res, next) => {
    const recipe = new Recipe({
        _id: req.params.id,
        name: req.body.name,
        ingredients: req.body.ingredients,
        cooking_time: req.body.cooking_time,
        challenge: req.body.challenge,
        author: req.body.author
    });
    Recipe.updateOne({_id: req.params.id}, recipe).then(
        () => {
            res.status(201).json({
                message: 'Recipe updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteRecipe = (req, res, next) => {
    Recipe.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Recipe deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};