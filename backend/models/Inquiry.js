const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  productOrService: {
    type: String,
    default: 'General Inquiry'
  },
  status: {
    type: String,
    enum: ['Pending', 'Contacted', 'Resolved'],
    default: 'Pending'
  }
}, { timestamps: true });

const Inquiry = mongoose.model('Inquiry', inquirySchema);
module.exports = Inquiry;
