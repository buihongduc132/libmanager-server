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
        // Dish.find()
        // .populate('dishMaterials')
        // .then(function(dishes) {
        //     DishMaterial.find()
        //     .then(function(dishMaterials) {

        //     });

        //     console.log(dishes);

        //     return dishes;
        // })
        // .then(function(dishes) {
        //     res.json(dishes);
        // })
        // .fail(function(err) {
        //     console.log(err);

        //     res.json(err);
        // })
    }
};

