const foodModel = require('../models/fooditem.model')

async function createfood(req, res){

console.log(req.foodPartner)

console.log(req.body);
console.log(req.file);


res.send("Food item created");
}

module.exports = {
  createfood,
};