const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Joke is required"],
        minlength: [10, "At least 10 caracters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "At least 3 caracters"]
    }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
