/**
 * DateIncomeController
 *
 * @description :: Server-side logic for managing incomes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    incomeFullDetail: function (req, res) {
        Income.find()
            .populate('IncomeDetails.Dish')
            .populate('payor')
            .populate('payor.type')
            .exec(function (err, incomes) {
                if (err) {
                    return res.json(err);
                }

                return res.json(incomes);
            });
    }
};

