const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

// Define the user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
})
// Create User Class
const UserClass = mongoose.model('user', userSchema);
// Export it
module.exports = UserClass;
