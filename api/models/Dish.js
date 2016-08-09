/**
 * Dish.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  seedData: [
    {
      name: 'Tra Dao',
      price: '35',
      materials: [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ]
    }
  ],
  attributes: {
    name: {
      type: 'string'
    },
    price: {
      type: 'float'
    },
    parent: {
      model: 'Dish'
    },
    materials: {
      collection: 'material',
      via: 'dishes'
    }
  }
};

