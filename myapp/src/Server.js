import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://127.0.0.1:27017/reactconnect');
const Userchema = new mongoose.Schema({
  username: String
});
const User = new mongoose.model('User', Userchema);
app.post('/signup', async (req, res) => {
  try {
    const {
      username
    } = req.body;
    const newUser = new User({
      username
    });
    await newUser.save();
    res.send();
  } catch (error) {
    res.send(error);
  }
});
app.listen(5000);
