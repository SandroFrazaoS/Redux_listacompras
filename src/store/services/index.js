import axios from 'axios';
import {API_KEY, API_CX} from './api-Key'

export const services = {
  getImages: (product) => {
    const params = {
      key: API_KEY,
      cx: API_CX,
      searchType: 'image',
      lr: 'lang_pt',
      num: 1,
      q: product,
    }
    return axios.get('https://www.googleapis.com/customsearch/v1', { params })
      .then(resp => resp.data.items[0].link)
      .catch(err=> err);
  }
}