const dataSource = process.env.MONGODB_DATA_SOURCE
const database = process.env.MONGODB_DATABASE
const collection = process.env.MONGODB_COLLECTION
const baseUrl = process.env.MONGODB_DATA_API_URL
const apiKey = process.env.MONGODB_DATA_API_KEY

export default async function CreateUserResolver(_, { input }) {
  const { name, username, email, password } = input

  try {
    const response = await fetch(`${baseUrl}/action/insertOne`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'api-key': "apiKey
      },
      body: JSON.stringify({
        dataSource,
        database,
        collection,
        document: {
          name,
          username,
          email,
          password
        }
      })
    })

    const data = await response.json()

    return {
      id: data.insertedId,
      name,
      username,
      email,
      password
    }
  } catch (err) {
    return null
  }
}