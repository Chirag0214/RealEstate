const { model, Schema } = require('../connection');

const realtorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    agency: { type: String },
    licenseNumber: { type: String },
    profileImage: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('realtors', realtorSchema);
