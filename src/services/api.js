import { searchUrl, toplistUrl } from './config'; 

export const search = keywords => 
  fetch(searchUrl + keywords)
    .then(res => res.json());

export const getToplist = (id, num) =>
  fetch(toplistUrl + id + '/' + num)
    .then(res => res.json());