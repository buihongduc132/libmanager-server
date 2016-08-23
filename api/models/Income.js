/**
 * DateIncome.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  seedData: [
    {
      dayGen: 1,
      monthGen: 7,
      yearGen: 2016,
      dayActual: 1,
      monthActual: 7,
      yearActual: 2016,
      payor: {
        id: 1
      }
    }
  ],

  attributes: {
    dayGen: {
      type: 'integer'
    },
    monthGen: {
      type: 'integer'
    },
    yearGen: {
      type: 'integer'
    },
    dayActual: {
      type: 'integer'
    },
    monthActual: {
      type: 'integer'
    },
    yearActual: {
      type: 'integer'
    },
    payor: {
      model: 'person'
    },
    IncomeDetails: {
      collection: 'IncomeDetail',
      via: 'Income'
    }
  }
};

