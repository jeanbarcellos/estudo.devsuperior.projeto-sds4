import axios from 'axios'
import { BASE_URL } from 'utils/requests'

export const getSales = (page: Number) =>
  axios.get(`${BASE_URL}/sales?page=${page}&size=20&sort=date,desc`)

export const successBySeller = () =>
  axios.get(`${BASE_URL}/sales/success-by-seller`)

export const amountBySeller = () =>
  axios.get(`${BASE_URL}/sales/amount-by-seller`)
