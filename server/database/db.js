import mongoose  from "mongoose";



const Connection = async (URL) => {
    //const URL = `mongodb+srv://${username}:${password}@cluster0.1oeo2dp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {   
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
};

export default Connection;  