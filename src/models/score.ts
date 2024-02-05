import { ObjectId } from "mongodb";

export interface DbScore {
  _id: ObjectId;
  name: string;
  score: number;
}
