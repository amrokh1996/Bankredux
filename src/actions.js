// This is a synchronous action, hence
// thunk will not interfere.
export const deleteData = ()=>{
	return ({
		type : 'DELETE_DATA'
	})
}

// This function includes some async logic,
// hence we can dispatch action manually
export const addData = ()=>{

	// Thunk Function
	return async (dispatch,getState)=>{

		// Fetching results from an API : asynchronous action
		const response = await fetch(
			'https://mocki.io/v1/2407d9ca-fc96-4310-8f8e-e519fe5ff909');
		const data = await response.json();
		// Dispatching the action when async
		// action has completed.
		dispatch({
			type : 'ADD_DATA',
			payload : data
		});
	}
}
