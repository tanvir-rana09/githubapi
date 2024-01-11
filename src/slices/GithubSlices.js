import { createSlice } from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
	IDLE: 'idle',
	LOADING: 'loading',
	ERROR: 'error',
})
const initialState = {
	data: [],
	username: 'tanvir-rana09',
	status: STATUSES.IDLE
}
export const GithubSlice = createSlice({
	name: 'Github',
	initialState,
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload
		},
		setUsers: (state, action) => {
			state.data = action.payload
		},
		setStatus: (state, action) => {
			state.status = action.payload
		}
	}
})

export const { setStatus, setUsers,setUsername } = GithubSlice.actions
export default GithubSlice.reducer;

export const asyncThunk = () => {
	return async (dispatch, getState) => {
		const gets =getState().username
		dispatch(setStatus(STATUSES.LOADING))
		try {
			const res = await fetch(`https://api.github.com/users/${gets}`)
			const data = await res.json()
			dispatch(setUsers(data))
			dispatch(setStatus(STATUSES.IDLE))
		} catch (error) {
			console.log(error)
			dispatch(setStatus(STATUSES.ERROR))

		}
	}
}
