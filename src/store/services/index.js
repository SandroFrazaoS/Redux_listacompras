import axios from 'axios';

export const services = {
  getImages: (product) => {
    const params = {
      key: 'AIzaSyAxjmQpgYCKAjENdHO5ghNOzWNtjPI12cs',
      cx: '627996d91d0e5e580',
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