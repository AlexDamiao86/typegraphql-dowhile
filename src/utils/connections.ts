import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/bd-typegraphql', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

