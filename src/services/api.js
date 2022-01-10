import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
});

api.interceptors.request.use(config => {
  config.headers = {
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
    'x-rapidapi-key': '3f4e7e1f35msh8df430ceed29794p1bf831jsn84343c19234f'
  }
  return config;
})

export async function fetchMoviesApi(params) {
  const {data} = await api.get('', {params})
  return data;
}

export default api;