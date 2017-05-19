const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
  type: String,
  trim: true,

  },
  slug
  description
  tags
});

module.exports = mongoose.model('Store', storeSchema);
