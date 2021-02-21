module.exports = {
    multiMongooseToObj : (mongooses)=>{
        return mongooses.map(mongoose=>mongoose.toObject());
    },
    mongooseToObj : (mongoose)=>{
        return mongoose ? mongoose.toObject() : mongoose;
    }
}