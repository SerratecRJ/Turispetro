import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.0.108:3333"


});

export default api; 

//json-server --watch db.json --host yourIP --port 3333