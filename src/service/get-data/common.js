import axios from 'axios'
export default {
  getTags () {
    return axios.get('http://localhost:3000/v1/tags')
                  .then(response => response.data)
                    .catch(error => console.log(error))
  },
  getPages (pageNumber) {
    return axios.get(`http://localhost:3000/v1/paging/${pageNumber}`)
                  .then(response => response.data)
                    .catch(error => console.log(error))
  },
  getPagesDate () {
    return axios.get('http://localhost:3000/v1/pages_date_total')
                  .then(response => response.data)
                    .catch(error => console.log(error))
  }
}
