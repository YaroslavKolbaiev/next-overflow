import mongoose from 'mongoose';
const { Schema } = mongoose;

const modelStatistic = new Schema(
  {
    year: {
      type: String,
      required: true,
    },
    statistics: {
      type: Array,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

export const Statistic =
  mongoose.models.Statistic || mongoose.model('Statistic', modelStatistic);
