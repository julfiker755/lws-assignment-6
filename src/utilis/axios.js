import axios from 'axios'
import { useEffect } from 'react';
export const axiosinstance=axios.create({
    baseURL: 'http://localhost:9000/',
  });


