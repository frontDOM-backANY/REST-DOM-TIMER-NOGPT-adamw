import db from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URI = process.env.MONGO_URI;

async function main() {
  await db.connect(URI as string);
  console.log('DB connected.');
}

export default main;