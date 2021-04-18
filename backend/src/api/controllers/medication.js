const Medication = require('../models/medication');
const mongoose = require('mongoose');


exports.add_medication = async (req, res) => {
    try{
        const user_id = req.userData._id;
        const medication = new Medication({
            _id: mongoose.Types.ObjectId(),
            user: user_id,
            name: req.body.name,
            dosage: req.body.dosage,
            frequency: req.body.frequency
        });
        await medication.save();
        return res.status(201).json({status: true, medication});
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({status:false, error});
    }
}


exports.get_medication = async (req, res) => {
    try{
        const user_id = req.userData._id;
        const medication = await Medication.find({user: user_id});
        return res.status(200).json({medications: medication});
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({status: false, error});
    }
}


exports.edit_medication = async (req, res) => {
    try{
        const user_id = req.userData._id;
        const {med_id} = req.body;
        const {med_data} = req.body
        await Medication.updateOne({$and: [{user: user_id}, {_id: med_id}]}, {
            $set: {
                'name': med_data.name,
                'dosage': med_data.dosage,
                'frequency': med_data.frequency
            },
        });
        const updated_medications = await Medication.find({user: user_id});
        return res.status(200).json({updated_medications});
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({status: false, error});
    }
}


exports.delete_medication = async (req, res) => {
    try{
        const {_id} = req.userData;
        const med_id = req.body.id
        await Medication.findOneAndDelete({$and: [{user: _id}, {_id: med_id}]});
        const updated_medications = await Medication.find({user: _id});
        return res.status(200).json({updated_medications});
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({status: false, error});
    }
}