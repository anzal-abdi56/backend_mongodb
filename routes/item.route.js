const express = require("express")
const Item = require("../models/items.model")
const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const items = await Item.find({})
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// GET BY ID
router.get("/:id",async(req,res)=>{
    try {
     const {id} = req.params
     const item = await Item.findById(id)
     res.status(200).json(item)
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 
 })

// POST 
router.post("/",async(req,res)=>{
    try {
        const item = await Item.create(req.body)
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// put
router.put("/:id", async (req, res) => {
    try {
     const { id } = req.params
     const item = await Item.findByIdAndUpdate(id,req.body)
 
     if(!item){
         return res.status(404).json({message:"Item not found"})
     }
     const updatedItem = await Item.findById(id)
     res.status(200).json(updatedItem)
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 });
 
 // delete an item
 
 router.delete("/:id",async(req,res)=>{
     try {
         const {id} = req.params
         const item = await Item.findByIdAndDelete(id,req.body)
         if(!item){
             return res.status(404).json({message:"Item not found"})
         }
         res.status(200).json({message:"Item deleted successfully"})
     } catch (error) {
         res.status(500).json({message:error.message})
     }
 })


module.exports = router