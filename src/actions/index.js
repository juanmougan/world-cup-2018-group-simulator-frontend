import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
export const FETCH_GROUPS = 'FETCH_GROUPS';

export function fetchGroups(city) {
  const url = `${BASE_URL}/groups`;
  const request = axios.get(url);   // axios returns a promise, it doesn't contain our data

  return {
    // always an action needs to have a type
    type: FETCH_GROUPS,
    payload: request
  }
}
