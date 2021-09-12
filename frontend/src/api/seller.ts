import axios from 'axios'
import { BASE_URL } from 'utils/requests'

export const getSellers = () =>
    axios.get(`${BASE_URL}/sellers`)
