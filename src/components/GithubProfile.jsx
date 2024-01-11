import { useEffect } from "react"
import { STATUSES, asyncThunk } from '../slices/GithubSlices'
import { useDispatch, useSelector } from "react-redux"
import Form from "./Form"

const GithubProfile = () => {
  const dispatch = useDispatch()
  const {data:data2,username,status} = useSelector((state) => state)
  useEffect(() => {
    dispatch(asyncThunk())
  }, [dispatch,username])

  if(status===STATUSES.LOADING){
    return <h1>Your Data Is Loading....</h1>
  }
  return (
    <div>
      <div>
        <Form/>
      </div>
      <div className="grid grid-cols-2 gap-5">
      <div><img src={data2.avatar_url} /></div>
      <div className="flex flex-col justify-between">
        <p>{data2.name}</p>
        <p>{data2.login}</p>
        <p>followers: {data2.followers}</p>
        <p>following: {data2.following}</p>
        <p>{data2.location}</p>
        <p>{data2.bio}</p>
      </div>
    </div>
    </div>
  )
}

export default GithubProfile