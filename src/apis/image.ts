import axios from 'axios';

// TODO: Refactor into env
const BASE_URL = 'https://api.unsplash.com/search/photos';
const CLIENT_ID = 'uR78-L1K4kDS166Ho6HI9tW5dezuR_ocHf7ZpLiuT1Q';

export const getImages = async ({query}: {query: string}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?query=${query}&client_id=${CLIENT_ID}`,
    );
    if (response && response.data) {
      return response.data;
    }
  } catch {
    (error: Error) => {
      throw error;
    };
  }
};
