import { MongoClient } from 'mongodb'

const url = `process.env.VUE_APP_MONGODB_URI` 
const dbName = 'fit-fusion'

export async function db() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}