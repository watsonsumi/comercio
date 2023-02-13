import axios from 'axios';

export const axiosFetch = axios.create({
	/* import.meta.env.VITE_API_URL es igual que process.env.VITE_API_URL, sintaxis del incializador de vite */
	baseURL: 'http://localhost:9000', //import.meta.env.VITE_API_URL,
	// baseURL: 'https://notification-api.onrender.com/api/v1/', //import.meta.env.VITE_API_URL,
});
export const axiosFetchEmail = axios.create({
	/* import.meta.env.VITE_API_URL es igual que process.env.VITE_API_URL, sintaxis del incializador de vite */
	// baseURL: 'http://localhost:9000', //import.meta.env.VITE_API_URL,
	baseURL: 'https://notification-api.onrender.com/api/v1/', //import.meta.env.VITE_API_URL,
});