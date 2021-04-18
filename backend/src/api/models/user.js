const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ 
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    },

    firstname: { 
        type: String, 
        required: true,
    },

    lastname: { 
        type: String, 
        required: true,
    },

    email: { 
        type: String, 
        required: true,
        unique: true,
    },
    
    age: { 
        type: Number, 
        required: true,
    },

    phone: {
        type: String, 
        required: true,
    },

    password: {
        type: String, 
        required: true,
    }
},
    { timestamps: true });

module.exports = mongoose.model('User', userSchema);