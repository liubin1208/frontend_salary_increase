import React from 'react'
import { getUser } from '../api/fetchData'

const resource = getUser()

const UserWelcome = () => {
  // throw new Promise(() => {})
  // console.log(1)
  const userDetails = resource.read()

  return (
    <div>
      <p>
        Welcome <span className="user-name">{userDetails.name}</span>, here are
        your Todos for today
      </p>
      <small>Completed todos have a line through them</small>
    </div>
  )
}

export default UserWelcome
