const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        console.log('trying...');
        await mongoose.connect(config.get('mongoURI'));
        console.log('MongoDB connected');
    }
    catch (err) {
        console.log(err.message);;
        process.exit(1);
    }
}

module.exports = connectDB;