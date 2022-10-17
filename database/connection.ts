import mongoose, { ConnectOptions } from 'mongoose'

const mongodbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/usersdb";

export default ()=>{
    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      console.log('Db Connected');
      
      mongoose.connection.on("error", (e) => {
        console.error(`Error ${e}`);
      });
}

