const dataSource = process.env.MONGODB_DATA_SOURCE
const database = process.env.MONGODB_DATABASE
const collection = process.env.MONGODB_COLLECTION

export default async function CreateProductResolver(_, { input }) {
  const { name, price } = input

  try {
    const response = await fetch(`${baseUrl}/action/insertOne`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({
        dataSource,
        database,
        collection,
        document: {
          name,
          price
        }
      })
    })

    const data = await response.json()

    return {
      id: data.insertedId,
      name,
      price
    }
  } catch (err) {
    return null
  }
}


















export default async function CreateUserResolver(_, { input }) {
  const { name, username, email, password } = input