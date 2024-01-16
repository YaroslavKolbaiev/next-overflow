import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersByCountrySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

export const modelUserByCountry =
  mongoose.models.UsersByCountry ||
  mongoose.model('UsersByCountry', usersByCountrySchema);
