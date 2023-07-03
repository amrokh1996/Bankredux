const { combineReducers } = require("redux");

const INITAL_STATE = {
	data : null
}

const dataReducer = (state=INITAL_STATE, action)=>{
	switch(action.type) {
		case 'ADD_DATA' : return {...state, data : action.payload};

		default : return state;
	}
}

const reducers = combineReducers({
	data : dataReducer
})

export default reducers
