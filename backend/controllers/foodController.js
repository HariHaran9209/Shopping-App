import foodModel from '../models/foodModel.js'
import fs from 'fs'
import path from 'path'

const addFood = async (req, res) => {
    try {
        console.log('Request received:', {
            hasFile: !!req.file,
            body: req.body,
            headers: req.headers
        });
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
                details: {
                    body: req.body,
                    headers: req.headers
                }
            });
        }

        console.log('File received:', {
            filename: req.file.filename,
            path: req.file.path,
            mimetype: req.file.mimetype
        });
        
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename,
            category: req.body.category
        })

        await food.save();
        res.json({
            success: true, 
            message: "Food added successfully",
            data: food
        });
    } catch (error) {
        console.error('Error in addFood:', error);
        res.status(500).json({
            success: false,
            message: error.message,
            details: error.stack
        });
    }
}

// All foods
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            message: "Foods fetched successfully",
            data: foods
        });
    } catch (error) {
        console.error('Error in listFood:', error);
        res.status(500).json({
            success: false,
            message: error.message,
            details: error.stack
        });
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, () => {})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({
            success: true,
            message: "Food removed successfully",
            data: food
        });
    } catch (error) {
        console.error('Error in removeFood:', error);
        res.status(500).json({
            success: false,
            message: error.message,
            details: error.stack
        });
    }
}

export { addFood, listFood, removeFood }