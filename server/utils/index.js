function calculateDaysExpiresIn(startDate, expirationDate) {
  const now = new Date();
  const start = new Date(startDate);
  const diffDays = Math.ceil((now - start) / (1000 * 60 * 60 * 24));
  return expirationDate - diffDays;
}

// Get all foods for a given user id
/* OUTPUT
  [
    {
        "id": 10,
        "name": "potato",
        "imageUrl": "../../../assets/food-placeholder.jpg",
        "expiresIn": 349
    },
    {
        "id": 11,
        "name": "lettuce",
        "imageUrl": "../../../assets/food-placeholder.jpg",
        "expiresIn": 19
    },
  ]
*/

const getFoodArray = foodArray => {
  return foodArray[0].food.map(food => {
    let expiresIn = food.expiration_date
      ? calculateDaysExpiresIn(
          food.user_food.startDate,
          food.expiration_date.life
        )
      : null;

    return {
      id: food.id,
      name: food.name,
      imageUrl: food.imageUrl,
      expiresIn,
    };
  });
};

module.exports = { getFoodArray };
