import axios from 'axios'

export function getTest () {
  return axios.get('http://localhost:3000/v1/users/1')
                .then(response => response)
                  .catch(error => console.log(error))
}
