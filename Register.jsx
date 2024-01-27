import { Button, Container, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Input_Component } from '../components/Input_Component';

 const Register = () => {

  const [user_data, setUserData] = useState({});

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setUserData({ ...user_data, [id]: value });
   };  
  // const submit_handle = (e) => {
  //   e.prevantDefault()

  //   console.log("data", user_data);
  //   navigate("/");  const submit_handle = (e) => {
  //     e.prevantDefault()
  
  //     console.log("data", user_data);
  //     navigate("/");}
  return (
    <>
    <Container  className="Container2">
      <Stack>

        <h1 className = 'w-5'>Sign Up Page</h1>
        {/* <Demo_Component title={"Login Page"}> */}
        <form 
        // onSubmit={submit_handle}
        >
          <Input_Component
            placeholder={"Email address"}
            type={"email"}
            id={"email"}
            required={true}
            onChange={onChangeHandle}
          /> <br /><br />
          <Input_Component
            required={true}
            placeholder={"Password"}
            type={"password"}
            id={"password"}
            onChange={onChangeHandle}
          />
          <br /><br />
          <Button style={{color: "white",backgroundColor: "blue",borderRadius : '0px 30px', width : '300px', height : '50px', fontSize : '30px'}}
          type="submit"
          >Submit Details
          </Button><br /><br />
          <button className='log-reg'><Link to = 'login'>Go To Login</Link></button><br /><br />
          <button className='log-dash'><Link to = 'dashboard'>Go To Dashboard</Link></button>
        </form>
      </Stack>
    </Container>
    </>

  )
  }

export {Register}