import mongoose, { ConnectOptions } from 'mongoose'


export default (mongodbUrl : any)=>{
    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      console.log('Db Connected');
      
      mongoose.connection.on("error", (e) => {
        console.error(`Error ${e}`);
      });
}

