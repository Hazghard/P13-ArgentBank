import axios from 'axios';

export async function PutModifiedProfile({ token, firstName, lastName }) {
	const url = 'http://localhost:3001/api/v1/user/profile';
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
	};
	const data = {
		firstName,
		lastName,
	};

	try {
		const response = await axios.put(url, data, { headers });
		return response.data;
	} catch (error) {
		console.error('Erreur lors de la requête PUT :', error);
		throw error;
	}
}
