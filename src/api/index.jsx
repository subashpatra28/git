import axios from 'axios';
const URL_BASE = 'https://api.github.com'

export async function getUserData(userName) {
    const userInfo = await axios.get(`${URL_BASE}/users/${userName}`)
    return userInfo
}

export async function getUserRepo(userName) {
  const repos = await axios.get(`${URL_BASE}/users/${userName}/repos`);
  return repos;
}
