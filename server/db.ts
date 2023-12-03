import { MongoClient } from 'mongodb'

const url = `${process.env.VUE_APP_MONGODB_URI}` // Replace with your MongoDB connection string
const dbName = 'fit-fusion'; // Replace with your database name

export async function connectToDB() {
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