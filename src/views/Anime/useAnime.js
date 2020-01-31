import axios from 'axios';
const useAnime = () => {
  const createQuery = variables => {
    variables = { page: 1, perPage: 10, ...variables };
    const query = `
      query ($page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (search: $search) {
            id
            title {
              english
            }
          }
        }
      }
    `;
    return { query, variables };
  };

  const doAniQuery = async () => {
    let result = { success: false, response: {} };
    const request = {
      method: 'post',
      url: 'https://graphql.anilist.co',
      data: createQuery({ search: 'One Piece' })
    };
    try {
      const response = await axios(request);
      result = { success: true, response: response };
    } catch (error) {
      result = { success: false, response: error };
    }

    return result;
  };
  return { doAniQuery };
};

export default useAnime;
