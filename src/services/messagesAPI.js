const axios = require('axios').default;

export default axios.create({
  baseURL: 'https://share-backend-br.herokuapp.com'
});
