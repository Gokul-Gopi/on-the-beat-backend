const mongoose = require('mongoose')


const connectToMongo = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/on-the-beat`,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            });

        console.log(`MongoDB Connected`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }

}



module.exports = connectToMongo;