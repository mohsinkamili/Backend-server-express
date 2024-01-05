const axios = require("axios");

const FetchFood = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://food-recipes-with-images.p.rapidapi.com/",
      params: { q: "chicken soup" },
      headers: {
        "X-RapidAPI-Key": "f7494d7c4dmsh4a75cde3d774ca3p1a9760jsn4dedd77a58cd",
        "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    console.log(response.data.d);
    return response.data.d;
  } catch (error) {
    console.error(error);
  }
};

const FetchData = async (req, res) => {
  const RecipeData = await FetchFood();
  res.json(RecipeData);
};

module.exports = FetchData;
