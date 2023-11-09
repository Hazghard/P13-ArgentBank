import axios from 'axios';

export async function login({email, password}) {
	return axios.post('http://localhost:3001/api/v1/user/login', {
		email,
		password
	})
}
