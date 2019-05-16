const GET_DATA = 'GET_DATA';
const LOADING = 'LOADING';

const initialState = {
	weather: [],
	isLoading: false,
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
		default:
			return state;
	}
};

export default fetchReducer;
