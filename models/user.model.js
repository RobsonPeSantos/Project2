const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
      username: {
        type: String,
        trim: true,
        required: [true, 'Username is required.'],
        unique: true
      },
      email: {
        type: String,
        required: [true, 'Email is required.'],
        // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        unique: true,
        lowercase: true,
        trim: true
      },
      passwordHash: {
        type: String,
        required: [true, 'Password is required.']
      },
      favoriteSeries: [{
        type: Schema.Types.ObjectId, ref:"Serie"
      }]//use populate method
    },
    {
      timestamps: true
    }
  );

// every new serie will be saved in the "series" collection in the database:

module.exports = model('User', userSchema);