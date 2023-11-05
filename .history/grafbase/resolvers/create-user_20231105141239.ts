const baseUrl = process.env.MONGODB_DATA_API_URL
const apiKey = process.env.MONGODB_DATA_API_KEY

export default async function CreateProductResolver(_, { input }) {
  const { name, price } = input

  try {
    // ...
  } catch (err) {
    return null
  }
}
