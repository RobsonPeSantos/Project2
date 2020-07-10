 
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
      passwordHash: {
        type: String,
        required: [true, 'Password is required.']
      }
    },
    {
      timestamps: true
    }
  );

const serieSchema = new Schema(
  {
    title: String, //título
    cast: [], //elenco
    genre: String, // gênero
    image: String, //foto de capa
    description: String, //descrição
    rate: { //avaliação
        type: Number,
        min: 0,
        max: 10
    } 
  },
  {
    timestamps: true
  }
);

// every new serie will be saved in the "series" collection in the database:

module.exports = model('Serie', serieSchema);
module.exports = model('User', userSchema);