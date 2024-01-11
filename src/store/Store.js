import { configureStore } from "@reduxjs/toolkit";
import githubReducer from '../slices/GithubSlices'

export const store = configureStore({
	reducer:githubReducer
	
})