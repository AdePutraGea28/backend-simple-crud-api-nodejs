// import mongoose
import mongoose from 'mongoose';

// Buat Schema
const Employee = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// export model
export default mongoose.model('Employees', Employee);
