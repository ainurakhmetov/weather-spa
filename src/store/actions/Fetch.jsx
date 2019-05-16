import axios from 'axios';

const GET_DATA = 'GET_DATA';
const LOADING = 'LOADING';
const ERROR = 'ERROR';

const getData = (city) => (dispatch) => {
	dispatch({
		type: LOADING,
		payload: true,
	});
	axios
		.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=b349755b7def5cce6733be205a2f45fa`)
		.then((response) => {
			console.log(response);
			dispatch({
				type: GET_DATA,
				payload: {
					weather: response.data,
					isLoading: false,
				},
			});
		})
		.catch(() => {
				dispatch({
					type: ERROR,
					payload: {
						error: true,
						isLoading: false,
					},
				})
			}
		)
};

export default getData;
