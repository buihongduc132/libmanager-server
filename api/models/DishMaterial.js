/**
 * DishMaterial.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  seedData: [
    {
      id: 1,
      amount: 35,
      material: {
        id: 1
      }
    },
    {
      id: 2,
      amount: 50,
      material: {
        id: 2
      }
    },
    {
      id: 3,
      amount: 70,
      material: {
        id: 3
      }
    },
  //   {
  //     id: 4,
  //     amount: 35,
  //     material: {
  //       id: 1
  //     }
  //   },
  //   {
  //     id: 5,
  //     amount: 50,
  //     material: {
  //       id: 2
  //     }
  //   },
  //   {
  //     id: 6,
  //     amount: 70,
  //     material: {
  //       id: 3
  //     }
  //   },
  //   {
  //     id: 7,
  //     amount: 35,
  //     material: {
  //       id: 1
  //     }
  //   },
  //   {
  //     id: 8,
  //     amount: 50,
  //     material: {
  //       id: 2
  //     }
  //   },
  //   {
  //     id: 9,
  //     amount: 70,
  //     material: {
  //       id: 3
  //     }
  //   },
  ],
  attributes: {
    material: {
      model: "material"
    }
    , amount: {
      type: 'integer'
    }
    , dish: {
      model: 'Dish'
    }
  }
};

