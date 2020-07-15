const mongoose = require("mongoose");
const User = require("../models/user.model");

require("../config/configdb");

const users = [
  {
    "username" : "Erick",
    "email" :"ERICK@GMAIL.COM" ,
    "passwordHash" : "'$2b$12$dbstSfo1FN9jnZOSQ96N7eMMMe9FFI2QmYWo6E44WhutEUg9kZOcW"
  }
];

(async function seedDB() {
  try {
    const result = await User.create(users);
    console.log(`Success! Created ${result.length} hosts added to db`);
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
})();
