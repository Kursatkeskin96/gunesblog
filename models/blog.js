import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: [true, 'Title is required.'],
    min: 4,
  },
  text: {
    type: String,
    required: [true, 'Text is required.'],
    min: 6,
  }
}, {timestamps: true});

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;