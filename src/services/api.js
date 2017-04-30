import { searchUrl, toplistNewUrl } from './config'; 

export const search = keywords => 
  fetch(searchUrl + keywords)
    .then(res => res.json());

export const getToplistNew = () =>
  fetch(toplistNewUrl)
    .then(res => res.json());