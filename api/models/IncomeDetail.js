/**
 * IncomeDetail.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  seedData: [
    {
      Dish: {
        id: 1
      },
      discount: 0,
      price: 30,
      Income: {
        id: 1
      }
    },
    {
      Dish: {
        id: 2
      },
      discount: 0,
      price: 35,
      Income: {
        id: 1
      }
    },
    {
      Dish: {
        id: 3
      },
      discount: 0,
      price: 25,
      IncomeDaily: {
        id: 1
      }
    }
  ],
  attributes: {
    Dish: {
      model: 'Dish'
    },
    discount: {
      type: 'float'
    },
    price: {
      type: 'float'
    },
    Income: {
      model: 'Income'
    }
  }
};

