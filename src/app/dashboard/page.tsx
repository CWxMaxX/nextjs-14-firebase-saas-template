"use client"
import React from 'react'
import { useUserAuth } from '../../context/AuthContext'



const Dashboard = () => {
  const { isLoggedIn, userName, uid, email } = useUserAuth()
  console.log("User : ", isLoggedIn, userName, uid, email)
  return (
    <div>
      {isLoggedIn ?
        <div>
          <pre>
          Logged In : {JSON.stringify({ isLoggedIn, userName, uid, email },null, 2)}
          </pre>
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