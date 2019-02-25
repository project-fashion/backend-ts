import { Document, Schema, Model, model, HookNextFunction } from 'mongoose';
import { Doc } from '../interfaces/doc';
import { IUser } from '../interfaces/user';

export interface IArticleModel extends IUser, Doc, Document {}

export const ArticleSchema: Schema = new Schema({
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String
  },
  bodyPart: {
    type: String,
    required: true
  },
  outfits: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Outfit'
    }
  ]
});

const ArticleModel: Model<IArticleModel> = model<IArticleModel>(
  'User',
  ArticleSchema
);

export default ArticleModel;
