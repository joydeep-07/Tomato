const foodModel = require('../models/fooditem.model')
const storageService = require('../services/storage.service')

const {v4:uuid} = require('uuid')

async function createfood(req, res){


const fileUploasResult = await storageService.uploadFile(req.file.buffer, uuid())

const foodItem = await foodModel.create({
  name: req.body.name,
  description: req.body.description,
  video: fileUploasResult.url,
  foodPartner: req.foodPartner._id,
});


res.status(201).json({
  message: "Food Created Successfully",
 food: foodItem
})
}

async function getFoodItems(req, res){
  const foodItems = await foodModel.find({ })
   res.status(200).json({
    message: "Food items fetched successfully",
    foodItems
   })
}

module.exports = {
  createfood,
  getFoodItems,
};