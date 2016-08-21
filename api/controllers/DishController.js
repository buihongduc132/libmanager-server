/**
 * DishController
 *
 * @description :: Server-side logic for managing Dishes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	dishFullDetail: function(req, res) {
        Dish.find()
        .populate('dishMaterials.material')
        .exec(function(err, data) {
            res.json(data);
        });
    }
};

