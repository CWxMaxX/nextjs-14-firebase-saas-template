"use client"
import React from 'react'
import { useUserAuth } from '../../context/AuthContext'
import { Button } from 'rsuite'



const Dashboard = () => {
  const { isLoggedIn, userName, uid, email, logout } = useUserAuth()
  console.log("User : ", isLoggedIn, userName, uid, email)
  return (
    <div>
      {isLoggedIn ?
        <div>
          <pre>
          Logged In : {JSON.stringify({ isLoggedIn, userName, uid, email },null, 2)}
          </pre>
          <Button onClick={logout} >Logout</Button>
        </div>
        :
        <div>
          User Not fount
        </div>
      }
    </div>
  )
}

export default Dashboard