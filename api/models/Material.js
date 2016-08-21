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
      containerAmount: '1000',
      unit: 'ml'
    },
    {
      id: 2,
      name: 'Yogurt',
      price: '6.5',
      containerAmount: '1',
      unit: 'hop'
    },
    {
      id: 3,
      name: 'Black Tea',
      price: '1500',
      containerAmount: '1000',
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
    containerAmount: {
      type: 'float'
    },
    unit: {
      type: 'string'
    }
  }
};

