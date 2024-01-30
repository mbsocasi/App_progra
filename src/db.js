import mongoose from 'mongoose';

// Funcion de conexion a la base de datos
export const connectDB = async () => {
    try { 
        await mongoose.connect("mongodb://localhost:27017/prograDB");
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
};