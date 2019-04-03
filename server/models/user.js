const mongoose = require('mongoose'),
    { Schema } = mongoose,
    bcrypt     = require('bcrypt-nodejs');

// Define the user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err) }

    // hash (encrypt) password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err) }

      // overwrite plain text password with hash
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
}
// Create User Class
const UserClass = mongoose.model('user', userSchema);
// Export it
module.exports = UserClass;
