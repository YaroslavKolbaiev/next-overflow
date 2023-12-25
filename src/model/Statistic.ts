import mongoose from 'mongoose';
const { Schema } = mongoose;

const modelStatistic = new Schema({
  monthId: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  users: {
    type: Number,
    required: true,
  },
});

export const Statistic =
  mongoose.models.Statistic || mongoose.model('Statistic', modelStatistic);
