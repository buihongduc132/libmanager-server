/**
 * DishController
 *
 * @description :: Server-side logic for managing Dishes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    dishesFullDetail: function (req, res) {
        Dish.find()
            .populate('dishMaterials.material')
            .exec(function (err, data) {
                res.json(data);
            });
    }

    , dishFullDetail: function (req, res) {
        var dishId = req.params['id']; 

        Dish.findOne({id: dishId})
            .populate('dishMaterials.material')
            .exec(function (err, data) {
                res.json(data);
            });
    }
};

