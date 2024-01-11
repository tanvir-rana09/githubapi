import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUsername } from "../slices/GithubSlices"

const Form = () => {
	const dispatch =useDispatch()
	const [value,setValue]=useState('')
	const submitHandle = (e)=>{
		e.preventDefault()
		dispatch(setUsername(value))
	}
  return (
	<div>
		<form onSubmit={submitHandle}>
			<input
			value={value}
			onChange={(e)=>setValue(e.target.value)}
			type="text" placeholder="search your github.."/>
			<button className="bg-pink-500" type="submit">Search</button>
		</form>
	</div>
  )
}

export default Form