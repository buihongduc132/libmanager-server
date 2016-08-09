/**
 * Material.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  seedData: [
    {
      id: 1,
      name: 'Mut Dao',
      price: '98',
      amount: '1000',
      unit: 'ml'
    },
    {
      id: 2,
      name: 'Yogurt',
      price: '6.5',
      amount: '1',
      unit: 'hop'
    },
    {
      id: 3,
      name: 'Black Tea',
      price: '1500',
      amount: '1000',
      unit: 'g'
    }
  ],
  attributes: {
    name: {
      type: 'string',
    },
    price: {
      type: 'float'
    },
    amount: {
      type: 'float'
    },
    unit: {
      type: 'string'
    },
    dishes: {
      collection: 'Dish',
      via: 'materials',
      dominant: true
    }
  }
};

