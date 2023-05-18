import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'username',
  },
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  text: {
    type: String,
    required: [true, 'Text is required.'],
  }
});

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;