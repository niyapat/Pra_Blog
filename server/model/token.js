import mongoose, { Mongoose } from "mongoose";

const TokenSchema = Mongoose.schema({
    token: { 
    type: String,
    required: true
    }
})

const token = mongoose.model('token', TokenSchema);

export default token;