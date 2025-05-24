const { model, Schema } = require('../connection');

const propertySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    area: { type: Number }, // in sqft or sqm
    propertyType: { type: String }, // e.g., Apartment, Villa, House
    listedBy: { type: Schema.Types.ObjectId, ref: 'users' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('properties', propertySchema);
