/**
 * DateIncomeController
 *
 * @description :: Server-side logic for managing Dateincomes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    dateIncomeFull: function (req, res) {
        DateIncome.find()
            .populate('DateIncomeDetails.Dish')
            .populate('payor')
            .populate('payor.type')
            .exec(function (err, dateIncomes) {
                console.log(dateIncomes);
                if (err) {
                    console.log(err)
                    return res.json(err);
                }

                return res.json(dateIncomes);
            });
    }
};

