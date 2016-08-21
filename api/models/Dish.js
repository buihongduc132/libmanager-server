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
      dishMaterials: [
        {
          material: {
            id: 1
          },
          amount: 20
        },
        {
          material: {
            id: 2
          },
          amount: 30
        },
        {
          material: {
            id: 3
          },
          amount: 50
        }
      ]
    },
    {
      name: 'Tra Sua',
      price: '40',
      dishMaterials: [
        {
          material: {
            id: 1
          },
          amount: 20
        },
        {
          material: {
            id: 2
          },
          amount: 30
        },
        {
          material: {
            id: 3
          },
          amount: 50
        }
      ]
    },
    {
      name: 'Tra Chanh',
      price: '50',
      dishMaterials: [
        {
          material: {
            id: 1
          },
          amount: 20
        },
        {
          material: {
            id: 2
          },
          amount: 30
        },
        {
          material: {
            id: 3
          },
          amount: 50
        }
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
    dishMaterials: {
      collection: 'DishMaterial',
      via: 'dish'
    }
  }
};

