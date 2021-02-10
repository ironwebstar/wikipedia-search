import axios from 'axios'

export const searchForArticlesByName = async (name) => {
  // Resolve the request to wikipedia here
  const res = await axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'opensearch',
      origin: '*',
      search: name
    }
  })

  return res
}
