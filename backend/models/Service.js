const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'Wrench' // Lucide icon name string
  },
  price: {
    type: String // Optional starting price
  }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
