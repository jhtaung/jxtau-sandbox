import axios from 'axios';
const useAnime = () => {
  const handleAniQuery = async () => {
    const query = `
      query {
        Page {
          media(isAdult: false, sort: POPULARITY_DESC) {
            id,
            title { romaji, english },
            coverImage { large }
          }
        }
      }
    `;
    const variables = {};
    const url = 'https://graphql.anilist.co';
    try {
      const response = await axios.post(url, { query, variables });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return { handleAniQuery };
};



export default useAnime;
