const GET_DATA = 'GET_DATA';
const LOADING = 'LOADING';
const ERROR = 'ERROR';

const initialState = {
	weather: [],
	isLoading: false,
	error: false,
};

const fetchReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				weather: action.payload.weather,
				isLoading: action.payload.isLoading,
			};
		case LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case ERROR:
			return {
				...state,
				error: action.payload.error,
				isLoading: action.payload.isLoading,
			};
		default:
			return state;
	}
};

export default fetchReducer;
