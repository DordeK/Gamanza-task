import * as mongoose from 'mongoose';

export const UniversitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  Description: { type: String, required: true },
  country: { type: String, required: true },
  created_by: { type: String, required: true },
  created_date: { type: String, required: true },
  updated_by: { type: String, required: false },
  updated_date: { type: String, required: false },
});

export const LogSchema = new mongoose.Schema({
  action: { type: String, required: true },
  object_id: { type: String, required: true },
  user: { type: String, required: true },
  name: { type: String, required: true, unique: false },
  date: { type: String, required: true },
});

export interface University extends mongoose.Document {
  name: string;
  image: string;
  Description: string;
  country: string;
  created_by: string;
  created_date: string;
  updated_by?: string;
  updated_date?: string;
}

export interface Log extends mongoose.Document {
  action: string;
  object_id: string;
  user: string;
  name: string;
  date: string;
}
