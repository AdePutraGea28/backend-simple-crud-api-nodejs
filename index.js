// import express
import express from 'express';
// import mongoose
import mongoose from 'mongoose';
// import routes
import route from './routes/index.js';
// import cors
import cors from 'cors';
// construct express function
const app = express();

// connect to database mongoDB
mongoose.connect('mongodb://localhost:27017/employees_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware
app.use(cors());
app.use(express.json());
app.use('/employee', route);

// listening to port
app.listen('3000', () => console.log('Server Running at port: 3000'));

// step one connect to mongo db and connect to server
// step two create models
// step three create a controler
// step four create a route for controller
