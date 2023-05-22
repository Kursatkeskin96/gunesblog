import { Schema, model, models } from 'mongoose';

const HomeSchema = new Schema({
  h1: {
    type: String,
    required: true,
  },
});

const Home = models.Home || model('Home', HomeSchema);

export default Home;