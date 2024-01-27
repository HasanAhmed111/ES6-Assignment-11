import { Button, ButtonBase } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
    <div className='Dashboard'>
    <h1>Dashboard</h1>
<div className='Button-Login'>
<button className='dash-log'><Link to="login">Go to Login</Link></button>
<br />
<br />
<button className='dash-reg'><Link to="register">Go to Sign Up</Link></button>
</div>
    </div>
</>
  )
}