/**
 * IncomeManagerController
 *
 * @description :: Server-side logic for managing Incomemanagers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllDishes: function(req,res) {
        Dish.find().exec(function(err, found) {
            res.json(found);
        })
    }
};

