const mongoose = require('mongoose');

const medicationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name:{
        type: String,
        required: true
    },

    dosage: {
        type: String,
        required: true
    },

    frequency: {
        type: String,
        required: true
    },
},
    { timestamps: true });

module.exports = mongoose.model('Medication', medicationSchema)