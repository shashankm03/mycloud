import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect('mongodb+srv://shashank:shashank@cluster0.7kqwfuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}